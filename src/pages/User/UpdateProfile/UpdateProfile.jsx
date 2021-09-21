import React, { useState, useEffect, useContext } from "react";
import { replace, useFormik } from "formik";
import UpdateHandler from "./UpdateProfileHandler";
import Loading from "../../../components/Loading/Loading";

function Auth() {
  const [loading, setLoading] = useState(false);
  const { validate } = UpdateHandler();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      newPassword: "fsdfsdf",
      confirmNewPassword: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className="h-screen">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
            <p className="text-center font-bold text-3xl">
              Update your account.
            </p>

            <div className="">
              <form
                className="flex flex-col pt-3 md:pt-6"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex flex-col pt-2">
                  <label htmlFor="name" className="text-lg">
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.errors.firstName ? (
                    <div className="text-red-400 pt-2">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col pt-2">
                  <label htmlFor="name" className="text-lg">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.errors.lastName ? (
                    <div className="text-red-400 pt-2">
                      {formik.errors.lastName}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col pt-2">
                  <label htmlFor="name" className="text-lg">
                    Email adress
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.errors.email ? (
                    <div className="text-red-400 pt-2">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col pt-2">
                  <label htmlFor="name" className="text-lg">
                    Currnet password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.errors.password ? (
                    <div className="text-red-400 pt-2">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col pt-2">
                  <label htmlFor="name" className="text-lg">
                    New password
                  </label>
                  <input
                    id="new-password"
                    name="newPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.errors.password ? (
                    <div className="text-red-400 pt-2">
                      {formik.errors.newPassword}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col pt-2">
                  <label htmlFor="name" className="text-lg">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmNewPassword"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmNewPassword}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {formik.errors.confirmNewPassword ? (
                    <div className="text-red-400 pt-2 ">
                      {formik.errors.confirmNewPassword}
                    </div>
                  ) : null}
                </div>

                {!loading ? (
                  <button
                    type="submit"
                    defaultValue="Log In"
                    className="  rounded text-white font-bold text-xl bg-primary p-3 mt-8"
                  >
                    Update
                  </button>
                ) : (
                  <Loading />
                )}
              </form>
            </div>
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

export default Auth;
