import React from "react";
import { useFormik } from "formik";
import Button from "../../../../components/Button/Button";
import validationHandler from "./validation/password";
import { useHistory } from "react-router-dom";

function Basic() {
  const history = useHistory();
  const { validate } = validationHandler();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmNewPassword: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert("Hello world!");
    },
  });

  return (
    <div className="w-full h-full relative">
      <p className="text-center font-semibold text-lg">Change your password</p>
      <form onSubmit={formik.handleSubmit} className="flex flex-col mt-2 ">
        <div className="flex flex-col pt-1">
          <label htmlFor="name" className="text-lg">
            New password
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.newPassword}
            placeholder="New password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.newPassword ? (
            <div className="text-red-400 pt-2 font-medium">
              {formik.errors.newPassword}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col pt-1">
          <label htmlFor="name" className="text-lg">
            Confirm new password
          </label>
          <input
            id="password"
            name="confirmNewPassword"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.confirmNewPassword}
            placeholder="Confirm new password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.confirmNewPassword ? (
            <div className="text-red-400 pt-2 font-medium">
              {formik.errors.confirmNewPassword}
            </div>
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
            placeholder="Old password"
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
