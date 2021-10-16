import { ADRESS } from "../utils/statics";

export const createArticle = (article) => {
  return fetch(ADRESS + "/createarticle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });
};
