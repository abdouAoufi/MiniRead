import { ADRESS } from "../utils/messages";

export const getTages = () => {
  return fetch(ADRESS + "/tags", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getTrendPost = () => {
  return fetch(ADRESS + "/trends", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
