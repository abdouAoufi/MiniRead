import { ADRESS } from "../utils/statics";

export const getArticles = () => {
  return fetch(ADRESS + "/posts", {
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
