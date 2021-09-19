import React, { useState } from "react";
import { ADRESS, templateArticle } from "../../utils/messages";
import Window from "../Window/Window";

function PostCreateTemp() {
  const [openModal, setOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState({
    title: "title",
    message: "message",
  });
  const setMessageWindow = (title, message) => {
    let updatedMessage = { ...messageModal };
    updatedMessage.title = title;
    updatedMessage.message = message;
    setMessageModal(updatedMessage);
    setOpenModal(!openModal);
  };
  const [articleData, setArticleData] = useState(templateArticle);

  const updateTagArticleData = (e) => {
    let updatedData = { ...articleData };
    updatedData.tags.at(-1).name = e.target.value;
    setArticleData(updatedData);
  };

  const updateInfoArticleData = (e) => {
    let updatedData = { ...articleData };
    updatedData.articleinfo[e.target.name] = e.target.value;
    setArticleData(updatedData);
  };

  const updateContentArticleData = (e) => {
    let updatedData = { ...articleData };
    updatedData.content.data[e.target.name] = e.target.value;
    setArticleData(updatedData);
  };

  const updateArticleData = (e) => {
    let updatedData = { ...articleData };
    updatedData[e.target.name] = e.target.value;
    setArticleData(updatedData);
  };

  const sendArticleData = () => {
    // console.log(JSON.stringify(articleData, null, 2));
    fetch(ADRESS + "/createarticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setMessageWindow(responseData.title, responseData.message);
      })
      .catch((err) => {
        const error = new Error(err);
        throw error;
      });
  };

  const inputClass =
    " w-5/6 shadow my-2 appearance-none border rounded  py-2 px-3 text-gray-700   leading-tight focus:outline-none focus:shadow-outline";
  return (
    <div className="mx-auto mt-4 w-full flex flex-col items-center">
      <Window
        openModal={openModal}
        click={() => setOpenModal(!openModal)}
        message={messageModal}
      />

      <input
        type="text"
        placeholder="user id"
        name="creator"
        className={inputClass}
        onChange={(e) => updateArticleData(e)}
      />

      <input
        type="text"
        placeholder="title"
        name="title"
        className={inputClass}
        onChange={(e) => updateArticleData(e)}
      />

      <input
        type="text"
        placeholder="image header "
        name="imageHeaderUrl"
        className={inputClass}
        onChange={(e) => updateArticleData(e)}
      />

      <input
        type="text"
        placeholder="topic"
        name="topic"
        className={inputClass}
        onChange={(e) => updateInfoArticleData(e)}
      />

      <input
        type="text"
        placeholder="summary"
        name="summary"
        className={inputClass}
        onChange={(e) => updateArticleData(e)}
      />

      <input
        type="text"
        placeholder="paragraph 1"
        name="paragraph_1"
        className={inputClass}
        onChange={(e) => updateContentArticleData(e)}
      />

      <input
        type="text"
        placeholder="imageUrl 1"
        name="imageUrl_1"
        className={inputClass}
        onChange={(e) => updateContentArticleData(e)}
      />

      <input
        type="text"
        placeholder="tags"
        name="tags"
        className={inputClass}
        onChange={(e) => updateTagArticleData(e)}
      />

      <input
        type="text"
        placeholder="time reading"
        name="timeReading"
        className={inputClass}
        onChange={(e) => updateInfoArticleData(e)}
      />

      <input
        type="number"
        placeholder="likes"
        name="likes"
        className={inputClass}
        onChange={(e) => updateInfoArticleData(e)}
      />

      <input
        type="text"
        placeholder="conclusion"
        name="conclusion"
        className={inputClass}
        onChange={(e) => updateArticleData(e)}
      />

      <button
        className="px-4 border-blue-500 border-2 rounded py-2 text-blue-500 font-semibold text-md"
        onClick={sendArticleData}
      >
        display data
      </button>
    </div>
  );
}

export default PostCreateTemp;
