import React, {useState} from "react";
import { useFormik } from "formik";
import Button from "../../../../components/layout@/button/button";
import validationHandler from "./validation/email";
import { useHistory } from "react-router-dom";
import Result from "./component/result";
import Loading from "../../../../components/layout@/loading/Loading";
import { updateEmail } from "../../../../api/user-service";

function Basic() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [hideForm, setHideForm] = useState(false);
  const [status, setStatus] = useState(422);
  const [result, setResult] = useState();
  const retry = () => {
    setLoading(false);
    setResponse(false);
    setHideForm(false);
  };
  const { validate } = validationHandler();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      sendData(values);
    },
  });

  const sendData = (info) => {
    setLoading(true);
    updateEmail(info)
      .then((response) => {
        setHideForm(true);
        setLoading(false);
        setStatus(response.status);
        return response.json();
      })
      .then((data) => {
        setResponse(true);
        setResult(data);
      });
  };

  return (
    <div className="w-full h-full relative">
      {loading ? <Loading /> : null}
      {response ? (
        <Result retry={retry} result={result} status={status} />
      ) : null}
      {!hideForm ? (
        <form onSubmit={formik.handleSubmit} className="flex flex-col mt-2 ">
          <div className="flex flex-col ">
            <label htmlFor="name" className="text-sm">
              Your new email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="new-email@email.com"
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.errors.email ? (
              <div className="text-red-400  pt-2">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="flex flex-col pt-1">
            <label htmlFor="name" className="text-sm">
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
          <div className="absolute flex mb-1  right-0 bottom-0">
            <Button text="Cancel" click={() => history.replace("/")} />
            <Button text="Update" click={formik.handleSubmit} primary />
          </div>
        </form>
      ) : null}
    </div>
  );
}

export default Basic;
