import { ADRESS } from "../utils/messages";
import { getInfoFromLocal } from "../services/tokenservice";

const token = getInfoFromLocal().token;
const userID = getInfoFromLocal().userID;

export const addUserInfo = (userInfo) => {
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
  const payLoad = {
    userInfo: {
      userID: userID,
      password: userInfo.password,
    },
    updatedInfo: {
      email: userInfo.email,
    },
  };
  console.log(payLoad);
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
  const payLoad = {
    userInfo: {
      userID: userID,
      password: userInfo.password,
    },
    updatedInfo: {
      password: userInfo.newPassword,
    },
  };
  console.log(payLoad);
  return fetch(ADRESS + "/update-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(payLoad),
  });
};
/* 
{
   "userInfo": {
    "userID" : "614c5a4fdaac7e640c241254",
    "password" : "12341234"
   },
   "updatedInfo" : {
       "email" : "updated@test.com"
   }
}
*/
