import { ADRESS } from "../utils/messages";

export const signup = (credenials) => {
  return fetch(ADRESS + "/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenials),
  });
};

export const login = (credenials) => {
  return fetch(ADRESS + "/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenials),
  });
};
