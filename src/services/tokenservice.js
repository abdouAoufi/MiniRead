export const saveToken = (token, userID) => {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("userID", userID);
};

export const getInfoFromLocal = () => {
  const info = {};
  const token = window.localStorage.getItem("token");
  const userID = window.localStorage.getItem("userID");
  info["token"] = token;
  info["userID"] = userID;
  return info;
};
export const deleteToken = () => {
  window.localStorage.removeItem("token");
};
