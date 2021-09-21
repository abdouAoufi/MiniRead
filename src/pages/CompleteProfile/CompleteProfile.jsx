import React from "react";
import Button from "../../components/Button/Button";
import CompletingTags from "../../components/Tags/CompletingTags";

function CompleteProfile() {
  return (
    <div className="h-screen ">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 relative flex flex-col px-8 py-12">
          <div>
            <h2 className="text-3xl font-bold text-primary">
              Tell us more about you
            </h2>
            <p className=" md:w-5/6 mt-3 text-lg text-black">
              In order to give you better experience with{" "}
              <span className="font-bold text-secondary-dark">MiniRead. </span>
              <br />
              We want you to give us some information about you.
            </p>
          </div>
          <div className="mt-4">
            <div className="mt-2">
              <p className="text-base font-semibold text-black">Your job</p>
              <input
                className="border outline-none w-full md:w-4/6 mt-2 py-2 px-2 rounded"
                type="text"
                name="work"
                id=""
              />
            </div>
            <div className="mt-4">
              <p className="text-base font-semibold text-black">
                Upload your photo
              </p>
              <div className="flex  items-center  mt-2 bg-grey-lighter">
                <label className=" flex px-4 py-2 items-center   bg-white text-blue rounded-sm   uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
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
              <p className="text-base font-semibold text-black">
                What sounds intressting for you?
              </p>
            </div>
          </div>
          <div className="fixed bottom-4 right-4">
            <Button disabled click={() => alert("Clickable")} text="Skip" />
            <Button text="Save" primary />
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
