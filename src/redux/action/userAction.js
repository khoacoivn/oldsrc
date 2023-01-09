import { message } from "antd";
import { userLocalService } from "../../service/localService";
import { postLogin, postRegister } from "../../service/userService";
import { SET_USER_LOGIN, SET_USER_LOGUP } from "../constant/userConstant";

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

export const setUserLogUpActionService = (values, onSuccess) => {
  return (dispatch) => {
    postRegister(values)
      .then((res) => {
        message.success("Successfully register");

        dispatch({
          type: SET_USER_LOGUP,
        });
        onSuccess();
      })
      .catch((err) => {
        message.error("Failed register");
      });
  };
};
