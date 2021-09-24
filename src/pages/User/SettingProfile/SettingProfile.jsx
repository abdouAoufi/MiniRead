import React from "react";
import { Link, Switch, Route, useLocation } from "react-router-dom";
import Basic from "./Pages/Basic";
import Email from "./Pages/Email";
import Password from "./Pages/Password";
import Modal from "../../../components/StyleRelated/Modal/Modal";

function SettingProfile() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <Modal openModal>
      <section className="mt-8 bg-white p-6 w-full md:w-5/6 lg:w-1/2 h-120 flex rounded-md">
        <div>
          <h2 className="text-2xl font-bold text-black"> Account setting </h2>
          <div className="mt-8">
            <Link to={`/update-userinfo/basic-info`}>
              <p className="my-4 font-medium text-black-light">Update Basic info</p>
            </Link>
            <Link to={`/update-userinfo/update-email`}>
              <p className="my-4 font-medium text-medium text-black-light">Update email</p>
            </Link>
            <Link to={`/update-userinfo/update-password`}>
              <p className="my-4 font-medium text-medium text-black-light">Update password</p>
            </Link>
          </div>
        </div>
        <div className=" flex-1 md:px-4">
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
      </section>
    </Modal>
  );
}

export default SettingProfile;
