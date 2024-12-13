import { OK, INTERNAL_SERVER } from "../../const.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { where, Op } from "sequelize";

//khởi tạo model để kết nối tới db
const model = initModels(sequelize);

// get user
const getUser = async (req, res) => {
  try {
    let { username } = req.query || "";
    let data = await model.users.findAll({
      where: {
        username: {
          [Op.like]: `%${username}%`,
        },
      },
      include: [
        {
          model: model.posts, //chọn model muốn kết bảng
          as: "posts",
          attributes: ["content", "user_id"], //chỉ định những column sẽ hiển thị
        },
      ],
    });
    return res.status(OK).json(data);
  } catch (error) {
    console.error("Error:", error); // Log đầy đủ lỗi
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    // lấy data từ body của request
    const { username, email, password_hash } = req.body;
    let newUser = await model.users.create({
      username,
      email,
      password_hash,
    });
    return res.status(201).json(newUser);
  } catch (error) {
    console.error("Error:", error); // Log đầy đủ lỗi
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// delete user
const deleteUser = async (req, res) => {
  try {
    let { user_id } = req.params;
    let user = await model.users.findByPk(user_id);
    // Check user tồn tại hay không
    if (!user) {
      // không tồn tại
      return res.status(404).json({ message: "user not found" });
    }
    user.destroy();
    return res.status(OK).json({ message: "user deleted successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// update user
const updateUser = async (req, res) => {
  try {
    // lấy thông tin params
    const {user_id} = req.params;

    // lấy thông tin muốn update
    const {username, password_hash} = req.body;

    // check user tồn tại trong db hay ko
    let user = await model.users.findByPk(user_id);
    if(!user){
        return res.status(404).json({message: "user not found!"})
    }

    let data = await model.users.update(
        {username, password_hash},
        {
            where: {user_id}
        }
    )
    return res.status(OK).json({message: "user updated successfully!"});
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export { getUser, createUser, deleteUser, updateUser };
