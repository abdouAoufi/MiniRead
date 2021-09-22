import React, { useContext, useState } from "react";
import Button from "../../../components/Button/Button";
import HeadBig from "../../../components/TypoComponent/Headings/HeadBig";
import Subtitle from "../../../components/TypoComponent/Subtitle/Subtitle";
import CompletingTags from "../../../components/Tags/CompletingTags";
import { topicList, jobsList, defaultprofileurl } from "../../../assets";
import DropDown from "../../../components/DropDown/DropDown";
import { addUserInfo } from "../../../api/uerservice";
import { AuthContext } from "../../../contexts/AuthContext";

function CompleteProfile() {
  const { token, userID } = useContext(AuthContext);
  const [topics, setTopics] = useState([]);
  const [selectedJob, setSelectedJob] = useState(jobsList[0].name);
  const [otherJob, setOtherJob] = useState("");

  const generateTopics = (topic) => {
    let updatedTopic = [...topics];
    updatedTopic.push(topic);
    setTopics(updatedTopic);
  };

  const removeTopic = (topic) => {
    let updatedTopic = [...topics];
    updatedTopic = updatedTopic.filter((t) => t !== topic);
    console.log(updatedTopic);
    setTopics(updatedTopic);
  };

  const validInput = () => {
    if (topics.length === 0) return;
    const finalPayLoad = {
      userInfo: {
        work: otherJob || selectedJob,
        interest: topics,
        profileImageUrl: defaultprofileurl,
      },
    };
    sendData(finalPayLoad.userInfo);
  };

  const sendData = (userInfo) => {
    addUserInfo(userInfo, userID, token).then((result) => {
      result.json().then((data) => console.log(data));
    });
  };
  return (
    <div className="h-screen ">
      <div className="w-full flex flex-wrap">
        <div className="w-full h-screen relative md:w-1/2  flex flex-col px-8 py-12">
          <div>
            <HeadBig text="Hi Abdou tell us more about you" />
            <p className=" md:w-5/6 mt-3 text-lg text-black">
              In order to give you better experience with{" "}
              <span className="font-bold text-secondary-dark">MiniRead. </span>
              <br />
              We want you to give us some information about you.
            </p>
          </div>
          <div className="mt-4 ">
            <Subtitle text="Your job" />
            <div className="mt-2 relative flex items-center">
              <div className="relative z-100 ">
                <DropDown list={jobsList} setSelected={setSelectedJob} />
              </div>
              <input
                onChange={(e) => setOtherJob(e.target.value)}
                placeholder="Other job "
                className="border ml-4 w-40 outline-none   py-2 px-2 rounded"
                type="text"
                name="work"
                id=""
              />
            </div>
            <div className="mt-4">
              <Subtitle text="Upload your photos" />
              <div className="flex  items-center  mt-2 bg-grey-lighter">
                <label className=" flex px-4 py-2 items-center bg-white text-blue rounded uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                  <svg
                    className="w-8 h-8"
                    fill="#00beb0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="ml-3 text-base leading-normal">
                    Select a file
                  </span>
                  <input type="file" className="hidden" accept="*/images" />
                </label>
              </div>
            </div>

            <div className="mt-2">
              <Subtitle text=" What sounds intressting for you?" />
              <div className="mt-3">
                {topicList.map((tpc, idx) => {
                  return (
                    <CompletingTags
                      key={idx}
                      removeTopic={removeTopic}
                      addTopic={generateTopics}
                      topic={tpc}
                    />
                  );
                })}
              </div>
            </div>

            <div className="absolute right-6 bottom-4 ">
              <Button text="Skip" />
              <Button click={validInput} text="Save" primary />
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="object-cover w-full h-screen hidden md:block"
            src="https://images.unsplash.com/photo-1576097492152-4687ccd1c6ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default CompleteProfile;
