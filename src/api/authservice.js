import { ADRESS } from "../utils/messages";

export const signup = (credenials) => {
  console.log(firstName, lastName, email, password);
  return fetch(ADRESS + "/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenials),
  });
};
