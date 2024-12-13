import { OK, INTERNAL_SERVER } from "../../const.js";
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";
import { where, Op } from "sequelize";
import bcrypt from "bcrypt";

const model = initModels(sequelize);

const register = async (req, res, next) => {
  try {
    // Bước 1: Nhận dữ liệu từ FE

    const { userName, emailU, pass, confirmPass } = req.body;
    console.log({ userName, emailU, pass, confirmPass });

    //Bước 2: Kiểm tra đầu vào

    // check usernameRegex
    const usernameRegex = /^[a-zA-Z0-9._]{3,20}$/;
    if (
      !usernameRegex.test(userName) ||
      /^[0-9._]/.test(userName) ||
      /\.$/.test(userName) ||
      /\s/.test(userName)
    ) {
      return res.status(400).json({
        message:
          "Invalid username. It must be 3-20 characters long, only contain letters, numbers, underscores, and dots. It cannot start/end with a dot or number, or contain spaces.",
        data: null,
      });
    }
    // check userExist
    const userExist = await model.users.findOne({
      where: {
        username: userName,
      },
    });
    if (userExist) {
      return res.status(400).json({
        message: "This username is already taken. Please choose another one.",
        data: null,
      });
    }

    //check emailRegex
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(emailU) || emailU.length < 10 || emailU.length > 100) {
      return res.status(400).json({
        message:
          "Invalid email. It must be 10-100 characters long and follow a valid format (e.g., example@domain.com).",
        data: null,
      });
    }
    // check emailExist
    const emailExist = await model.users.findOne({
      where: {
        email: emailU,
      },
    });
    if (emailExist) {
      return res.status(400).json({
        message: "This email is already registered. Please use another email.",
        data: null,
      });
    }

    // check pass
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/;
    if (!passwordRegex.test(pass)) {
      return res.status(400).json({
        message:
          "Invalid password. It must be 8-32 characters long, include at least one uppercase letter, one lowercase letter, and one number. Special characters are recommended for added security.",
        data: null,
      });
    }

    // check confirmPass
    if (pass !== confirmPass) {
      return res.status(400).json({
        message: "Passwords do not match.",
        data: null,
      });
    }


    // B3: mã hóa password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(pass, saltRounds);

    // B4: thêm người dùng mới vào db
    const userNew = await model.users.create({
      username: userName,
      email: emailU,
      password_hash: hashedPassword,
    });

    return res.status(OK).json({
      message: "Your account has been created successfully.",
      data: userNew,
    });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(INTERNAL_SERVER)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export { register };
