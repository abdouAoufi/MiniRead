import { ADRESS } from "../utils/messages";

// get single post
export const getSinglePostDB = (postID) => {
  return fetch(ADRESS + "/article/" + postID , {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
