import { ADRESS } from "../utils/messages";

export const signup = (credenials) => {
  console.log(firstName, lastName, email, password);
  fetch(ADRESS + "/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenials),
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      alert(JSON.stringify(data));
    })
    .catch((err) => {
      throw Error(err);
    });
};
