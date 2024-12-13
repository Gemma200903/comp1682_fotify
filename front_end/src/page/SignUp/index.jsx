import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { setErrors, updateField } from "../../redux/signUpSlice/signUpSlice";
import { registerAPI } from "../../utils/fectchFromAPI";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { inputData, errors } = useSelector((state) => state.signUpReducer);
  const [isRegistrationSuccess, setRegistrationSuccess] = useState(false);

  const validateInput = (name, value) => {
    const newErrors = { ...errors }; // Clone current errors
    switch (name) {
      case "userName":
        const userNameRegex = /^[a-zA-Z0-9._]{3,20}$/;
        if (!userNameRegex.test(value)) {
          newErrors.userName =
            "Username must be 3-20 characters, using only letters, numbers, underscores, or dots.";
        } else if (/^[0-9._]/.test(value) || /\.$/.test(value)) {
          newErrors.userName =
            "Username cannot start with a number, underscore, or dot and cannot end with a dot.";
        } else if (/\s/.test(value)) {
          newErrors.userName = "Username cannot contain spaces.";
        } else {
          delete newErrors.userName;
        }
        break;

      case "emailU":
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailRegex.test(value)) {
          newErrors.emailU = "Invalid email format.";
        } else {
          delete newErrors.emailU;
        }
        break;
      case "pass":
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,32}$/;
        if (!passRegex.test(value)) {
          newErrors.pass =
            "Password must be 8-32 characters, including an uppercase letter, a lowercase letter, and a number.";
        } else {
          delete newErrors.pass;
        }
        break;

      case "confirmPass":
        if (value !== inputData.pass) {
          newErrors.confirmPass = "Passwords do not match.";
        } else {
          delete newErrors.confirmPass;
        }
        break;

      default:
        break;
    }
    dispatch(setErrors(newErrors));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Cập nhật giá trị input
    dispatch(updateField({ field: name, value }));
    // Kiểm tra và cập nhật lỗi
    validateInput(name, value);
    // Xóa lỗi toàn cục nếu tất cả các trường hợp lệ
    const { userName, emailU, pass, confirmPass } = {
      ...inputData,
      [name]: value, // Cập nhật giá trị mới cho trường đang nhập
    };

    if (userName && emailU && pass && confirmPass) {
      dispatch(setErrors({ globalMessage: null }));
    }
  };

  const handleRegister = () => {
    const { userName, emailU, pass, confirmPass } = inputData;

    // Kiểm tra nếu dữ liệu không đầy đủ
    if (!userName || !emailU || !pass || !confirmPass) {
      dispatch(setErrors({ globalMessage: "All fields are required." }));
      return;
    }

    registerAPI({ userName, emailU, pass, confirmPass })
      .then((data) => {
        console.log("🚀 ~ handleRegister ~ data:", data);

        dispatch(updateField({ field: "userName", value: "" }));
        dispatch(updateField({ field: "emailU", value: "" }));
        dispatch(updateField({ field: "pass", value: "" }));
        dispatch(updateField({ field: "confirmPass", value: "" }));

        setRegistrationSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })

      .catch((error) => {
        console.log("🚀 ~ handleRegister ~ error:", error);
        if (error.response && error.response.data) {
          dispatch(
            setErrors({
              globalMessage:
                error.response.data.message || "Registration failed.",
            })
          );
        } else {
          dispatch(
            setErrors({
              globalMessage:
                "An unexpected error occurred. Please try again later.",
            })
          );
        }
      });
  };

  return (
    <div className="signUpContainer">
      <div className="signUpMainContent">
        <NavLink to={"/"} className={"turnLeft"}>
          <i className="fa-solid fa-arrow-turn-left icon--item" />
        </NavLink>
        <h1 className="logo">Fotify</h1>
        {/* <p className="desTitle">
          Sign up to start sharing and discovering great stories today!
        </p> */}
        <p
          className={`desTitle ${
            isRegistrationSuccess ? "successMessage" : ""
          }`}
        >
          {isRegistrationSuccess ? (
            <>
              <i
                className="fa-sharp fa-solid fa-badge-check icon--item"
                aria-hidden="true"
              />
              <br />
              Registration successful! Redirecting to login page...
            </>
          ) : (
            "Sign up to start sharing and discovering great stories today!"
          )}
        </p>

        <button className="loginWFb">
          <i className="fa-brands fa-square-facebook icon--item " />
          Sign in with Facebook
        </button>
        <div className="or">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        {errors.globalMessage && (
          <p className="error">{errors.globalMessage}</p>
        )}

        {/* userName */}
        <input
          value={inputData.userName}
          onChange={handleChange}
          name="userName"
          placeholder="Username"
          type="text"
        />
        {errors.userName && <p className="error">{errors.userName}</p>}

        {/* emailU */}
        <input
          value={inputData.emailU}
          onChange={handleChange}
          name="emailU"
          placeholder="Email"
          type="email"
        />
        {errors.emailU && <p className="error">{errors.emailU}</p>}

        {/* pass */}
        <input
          value={inputData.pass}
          onChange={handleChange}
          name="pass"
          placeholder="Password"
          type="password"
        />
        {errors.pass && <p className="error">{errors.pass}</p>}

        {/* confirmPass */}
        <input
          name="confirmPass"
          placeholder="Confirm password"
          type="password"
          value={inputData.confirmPass}
          onChange={handleChange}
        />
        {errors.confirmPass && <p className="error">{errors.confirmPass}</p>}

        <button onClick={handleRegister}>Sign Up</button>

        <div className="signIn">
          <p className="">Have an account?</p>

          <NavLink to={"/"} className={"signInLink"}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
