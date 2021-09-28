export const saveInfoLocal = (token, userID, userInfo) => {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("userID", userID);
  window.localStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const updateUserInfo = (updatedInfo) => {
  if (updateUserInfo) {
    window.localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
  }
};

export const getInfoFromLocal = () => {
  const info = {};
  const token = window.localStorage.getItem("token");
  const userID = window.localStorage.getItem("userID");
  const userInfo = window.localStorage.getItem("userInfo");
  info["token"] = token;
  info["userID"] = userID;
  info["userInfo"] = userInfo;
  return info;
};

export const deleteToken = () => {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("userID");
  window.localStorage.removeItem("userInfo");
};
