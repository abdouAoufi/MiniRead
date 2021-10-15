import { templateArticle } from "../utils/article";
import { ADRESS } from "../utils/statics";

export const createArticle = () => {
  return fetch(ADRESS + "/createarticle", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(templateArticle),
  });
};
