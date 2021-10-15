import { ADRESS } from "../utils/statics";

export const getSigleArticle = (id) => {
  if (!id) return;
  return fetch(ADRESS + "/article/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getArticleByCategoryDB = (category) => {
  if (!category) return;
  return fetch(ADRESS + "/article/category/" + category, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
