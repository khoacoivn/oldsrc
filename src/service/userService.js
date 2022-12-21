import { https } from "./configURL";

export let postLogin = (data) => {
  return https.post("/api/QuanLyNguoiDung/DangNhap", data);
};

export let postRegister = (data) => {
  return https.post("/api/QuanLyNguoiDung/DangKy", data);
};
