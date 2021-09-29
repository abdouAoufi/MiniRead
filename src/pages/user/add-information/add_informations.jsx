import React, { useContext, useState, useEffect } from "react";
import Button from "../../../components/layout@/button/button";
import HeadBig from "../../../components/typographie/title/title";
import Subtitle from "../../../components/typographie/subtitle/Subtitle";
import CompletingTags from "../../../components/tag/selected-tag";
import { topicList, jobsList, defaultprofileurl } from "../../../assets";
import DropDown from "../../../components/drop-down/drop_down";
import { addUserInfo } from "../../../api/user-service";
import { AuthContext } from "../../../contexts/auth_context";
import { useHistory } from "react-router-dom";
import { LayoutContext } from "../../../contexts/layout_context";
import { IMAGES_URL } from "../../../assets";
import UploadBtn from "../../../components/upload/upload";

function CompleteProfile() {
  const history = useHistory();
  const { setShowFooter, setShowNavbar } = useContext(LayoutContext);
  const { token, userID } = useContext(AuthContext);
  const [topics, setTopics] = useState([]);
  const [selectedJob, setSelectedJob] = useState(jobsList[0].name);
  const [otherJob, setOtherJob] = useState("");

  useEffect(() => {
    () => {
      setShowFooter(false);
      setShowNavbar(false);
    };
  }, []);

  const generateTopics = (topic) => {
    let updatedTopic = [...topics];
    updatedTopic.push(topic);
    setTopics(updatedTopic);
  };

  const removeTopic = (topic) => {
    let updatedTopic = [...topics];
    updatedTopic = updatedTopic.filter((t) => t !== topic);
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
    console.log(userInfo);
    let status = 422;
    addUserInfo(userInfo, userID, token)
      .then((result) => {
        status = result.status;
        result
          .json()
          .then((data) => {
            console.log(data);
            if (status >= 400) {
              return history.replace("/404");
            }
            history.replace("/");
          })
          .catch((err) => {
            history.replace("/404");
          });
      })
      .catch((err) => {
        history.replace("/404");
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
            <Subtitle text="Your occupation" />
            <div className="mt-2 relative flex items-center">
              <div className="relative z-100 ">
                <DropDown list={jobsList} setSelected={setSelectedJob} />
              </div>
              <input
                onChange={(e) => setOtherJob(e.target.value)}
                placeholder="Other occupations "
                className="small-input"
                type="text"
                name="work"
                id=""
              />
            </div>
            <div className="mt-4">
              <Subtitle text="Upload your photos" />
              <UploadBtn>
                <input type="file" className="hidden" accept="*/images" />
              </UploadBtn>
            </div>

            <div className="mt-2 h-full ">
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

                <div className="flex ">
                  <Button text="Skip" click={() => history.replace("/")} />
                  <Button click={validInput} text="Save" primary />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img className="img-cover" src={IMAGES_URL.CONTINUE_IMAGE} />
        </div>
      </div>
    </div>
  );
}

export default CompleteProfile;
