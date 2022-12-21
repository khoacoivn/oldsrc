export const USER_LOCAL = "USER_LOCAL";

export const userLocalService = {
  // save data from localStorage
  get: () => {
    let userJson = localStorage.getItem(USER_LOCAL);
    if (userJson) {
      return JSON.parse(userJson);
    } else {
      return null;
    }
  },
};
