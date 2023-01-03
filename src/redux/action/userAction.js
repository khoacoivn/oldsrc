import { message } from "antd";
import { userLocalService } from "../../service/localService";
import { postLogin } from "../../service/userService";
import { SET_USER_LOGIN } from "../constant/userConstant";

export const setUserActionService = (values, onSuccess) => {
  return (dispatch) => {
    postLogin(values)
      .then((res) => {
        message.success("Successfully login");

        dispatch({
          type: SET_USER_LOGIN,
          payload: res.data.content,
        });

        onSuccess();
        userLocalService.set(res.data.content);
      })
      .catch((err) => {
        message.error("Failed login");
      });
  };
};
