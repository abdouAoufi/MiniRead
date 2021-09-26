import React from "react";
import { useFormik } from "formik";
import Button from "../../../../components/Button/Button";
import validationHandler from "./validation/email";
import { useHistory } from "react-router-dom";

function Basic() {
  const history = useHistory();
  const { validate } = validationHandler();
  const formik = useFormik({
    initialValues: {
      email: "test@test.com",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Hello world!");
    },
  });

  return (
    <div className="w-full h-full relative">
      <p className="text-center font-semibold text-lg">Basic information</p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col mt-2 ">
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm">
            Your First name
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder=""
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.email ? (
            <div className="text-red-400  pt-2">{formik.errors.email}</div>
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
    </div>
  );
}

export default Basic;
