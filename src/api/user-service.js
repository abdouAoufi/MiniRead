import { ADRESS } from "../utils/messages";
import { getInfoFromLocal } from "../services/tokenservice";

const token = getInfoFromLocal().token;
const userID = getInfoFromLocal().userID;

export const addUserInfo = (userInfo) => {
  if (!token) return;
  return fetch(ADRESS + "/add-userinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ userInfo: userInfo, userID: userID }),
  });
};

export const updateBasicInformation = (userInfo) => {
  if (!token) return;
  const payLoad = {
    userInfo: {
      userID: userID,
      password: userInfo.password,
    },
    updatedInfo: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
    },
  };
  return fetch(ADRESS + "/update-basicinfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(payLoad),
  });
};

export const updateEmail = (userInfo) => {
  if (!token) return;
  const payLoad = {
    userInfo: {
      userID: userID,
      password: userInfo.password,
    },
    updatedInfo: {
      email: userInfo.email,
    },
  };
  return fetch(ADRESS + "/update-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(payLoad),
  });
};

export const updatePassword = (userInfo) => {
  if (!token) return;
  const payLoad = {
    userInfo: {
      userID: userID,
      password: userInfo.password,
    },
    updatedInfo: {
      password: userInfo.newPassword,
    },
  };
  return fetch(ADRESS + "/update-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(payLoad),
  });
};
