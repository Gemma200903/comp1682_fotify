import { OK, INTERNAL_SERVER } from "../../const.js";
import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { where, Op } from "sequelize";

const model = initModels(sequelize);

const getListPost = async (req, res) => {
  try {
    let data = await model.posts.findAll({
      include: [
        {
          model: model.users, //liên kết với bảng user
          as: "user",
          attributes: ["username"]  //chỉ lấy cột username
        },
      ],
      attributes: ["post_id", "user_id", "content", "image_url", "privacy_setting"]
    });
    return res.status(OK).json(data);
  } catch (error) {
    console.error("Error:", error); 
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error", error: error.message });
  }
};



export { getListPost };
