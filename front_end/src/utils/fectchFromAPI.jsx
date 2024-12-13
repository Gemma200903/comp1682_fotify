import axios from "axios";

// Cấu hình URL API cơ bản
const BASE_URL = "http://localhost:3000";

// Tạo options mặc định cho các request
export const options = {
  headers: {
    "Content-Type": "application/json", // Dữ liệu JSON
    "X-Fotify-App-Key": process.env.REACT_APP_FOTIFY_API_KEY, // API key từ môi trường
    token: localStorage.getItem("LOGIN_USER") || "", // Token đăng nhập nếu có
  },
};

// Hàm dùng chung để gọi API
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options); // Gọi API với GET
    return data; // Trả về dữ liệu
  } catch (error) {
    console.error(
      "Error fetching data from API:",
      error.response || error.message
    ); // Log lỗi
    throw error; // Ném lỗi ra ngoài
  }
};

// Hàm lấy danh sách bài viết
export const getListPost = async () => {
  try {
    // Thực hiện request đến API
    const { data } = await axios.get(`${BASE_URL}/posts/getPosts`, options);
    return data; // Trả về danh sách bài viết
  } catch (error) {
    console.error("Error in getListPost:", error.response || error.message);
    throw error;
  }
};

export const registerAPI = async (payload) => {
  try {
    const {data} = await axios.post(`${BASE_URL}/auth/register`, payload);
    return data;
  } catch (error) {
    console.error("Error in getListPost:", error.response || error.message);
    throw error;
  }
};
