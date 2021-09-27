import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import Button from "../../../../components/layout@/button/button";
import validationHandler from "./validation/basic";
import { useHistory } from "react-router-dom";
import { updateBasicInformation } from "../../../../api/user-service";
import Loading from "../../../../components/layout@/loading/Loading";
import { WindowContext } from "../../../../contexts/window_context";

function Basic() {
  const { setMessageWindow } = useContext(WindowContext);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { validate } = validationHandler();
  const formik = useFormik({
    initialValues: {
      firstName: "Aoufi",
      lastName: "Abderahmane",
      work: "Developer",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      sendData(values);
    },
  });

  const sendData = (info) => {
    let status = 422;
    setLoading(false);
    updateBasicInformation(info)
      .then((response) => {
        status = response.status;
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setMessageWindow(data.title, data.message);
        console.log(data);
      });
  };

  return (
    <div className="w-full h-full relative">
      {/* <p className="text-center font-semibold text-lg">Basic information</p> */}
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={formik.handleSubmit} className="flex flex-col ">
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-sm">
              Your First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="John"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.firstName ? (
              <div className="text-red-400  pt-2">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col pt-1">
            <label htmlFor="name" className="text-sm">
              Your last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder="John"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.lastName ? (
              <div className="text-red-400 pt-1">{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="flex flex-col pt-2">
            <label htmlFor="name" className="text-sm">
              Your job
            </label>
            <input
              id="work"
              name="work"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.work}
              placeholder="Writer"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.work ? (
              <div className="text-red-400 pt-2">{formik.errors.work}</div>
            ) : null}
          </div>
          <div className="flex flex-col pt-1">
            <label htmlFor="name" className="text-lg">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.password ? (
              <div className="text-red-400 pt-2 font-medium">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="absolute flex right-0 bottom-0">
            <Button text="Cancel" click={() => history.replace("/")} />
            <Button text="Update" click={formik.handleSubmit} primary />
          </div>
        </form>
      )}
    </div>
  );
}

export default Basic;
