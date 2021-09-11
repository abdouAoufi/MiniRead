import { ADRESS } from "../utils/messages";

export const getTages = () => {
  return fetch(ADRESS + "/tags", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
