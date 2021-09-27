import React, { useState } from "react";
import { Link, Switch, Route, useLocation, useHistory } from "react-router-dom";
import Basic from "./pages/basic_information";
import Email from "./pages/email";
import Password from "./pages/password";
import Modal from "../../../components/modal/modal/modal";

function SettingProfile() {
  const [showHeading, setHeading] = useState(true);
  return (
    <Modal openModal>
      <div className="mt-8 rounded-md bg-white p-6 w-full md:w-5/6 lg:w-1/2 h-120">
        <h2 className="text-xl text-center font-bold text-black">
          {" "}
          Account setting{" "}
        </h2>

        <div className=" flex h-full ">
          <div className="mt-8" onClick={() => setHeading(false)}>
            <Link to={`/update-userinfo/basic-info`}>
              <p className="py-3  border-b font-medium text-black-light">
                Change informations
              </p>
            </Link>
            <Link to={`/update-userinfo/update-email`}>
              <p className="py-3  border-b font-medium text-medium text-black-light">
                Change email
              </p>
            </Link>
            <Link to={`/update-userinfo/update-password`}>
              <p className="py-3  border-b font-medium text-medium text-black-light">
                Change password
              </p>
            </Link>
          </div>

          <div className=" flex-1 ml-6 md:px-4 py-6">
            <div className="h-full">
              <Switch>
                <Route path="/update-userinfo/basic-info">
                  <Basic />
                </Route>
                <Route path="/update-userinfo/update-email">
                  <Email />
                </Route>
                <Route path="/update-userinfo/update-password">
                  <Password />
                </Route>
              </Switch>
            </div>
            {showHeading ? (
              <div className="h-full w-full grid items-center place-items-center">
                change your
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default SettingProfile;
