import React from "react";
import Modal from "../StyleRelated/Modal/Modal";
import ModalLogic from "../../main/Layout/modal";

function Window(props) {
  const { click, openModal, insideModalHandler } = ModalLogic();
  return (
    <Modal center   openModal={props.openModal}>
      <div onClick={insideModalHandler}>
        <div className="inline-block   max-w-md p-6 my-8 w-120 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
          <p as="h2" className="text-xl font-semibold leading-6 text-gray-900">
            {props.message?.title}
          </p>
          <div className="mt-2">
            <p className="text-sm font-medium text-black-light">
              {props.message?.message}
            </p>
          </div>

          <div className="mt-6">
            <button
              type="button"
              className="float-right inline-flex justify-center px-4 py-2 text-sm font-medium text-primary bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              onClick={() => props.click()}
            >
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Window;
