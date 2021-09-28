import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import Button from "../../../../components/layout@/button/button";
import validationHandler from "./validation/basic";
import { useHistory } from "react-router-dom";
import { updateBasicInformation } from "../../../../api/user-service";
import Loading from "../../../../components/layout@/loading/Loading";
import Result from "./component/result";

function Basic() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [hideForm, setHideForm] = useState(false);
  const [status, setStatus] = useState(422);
  const [userInfo , setUserInfo] = useState({});
  const [result, setResult] = useState();
  const retry = () => {
    setLoading(false);
    setResponse(false);
    setHideForm(false);
  };
  const { validate } = validationHandler();
  const formik = useFormik({
    initialValues: {
      firstName: "Aoufi",
      lastName: "Abderahmane",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      sendData(values);
    },
  });

  const sendData = (info) => {
    setLoading(true);
    updateBasicInformation(info)
      .then((response) => {
        setHideForm(true);
        setLoading(false);
        setStatus(response.status);
        return response.json();
      })
      .then((data) => {
        setResponse(true);
        setResult(data);
        setUserInfo(data.userInfo)
      });
  };

  return (
    <div className="w-full h-full relative">
      {loading ? <Loading /> : null}
      {response ? (
        <Result userInfo={userInfo} retry={retry} result={result} status={status} />
      ) : null}

      {!hideForm ? (
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
      ) : null}
    </div>
  );
}

export default Basic;
