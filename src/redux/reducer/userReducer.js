import { SET_USER_LOGIN } from "../constant/userConstant";

const initialState = { user: null };

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_LOGIN:
      return { ...state, user: payload };

    default:
      return state;
  }
};
