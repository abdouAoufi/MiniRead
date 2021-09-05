import React, { useState } from "react";
import { useFormik } from "formik";
import RegisterHandler from "./RegisterHandler";
import { signup } from "../../../api/authservice";
const { validate } = RegisterHandler();

function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: (values) => {
      signup(values);
    },
  });
  return (
    <form className="flex flex-col pt-3 md:pt-6" onSubmit={formik.handleSubmit}>
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
          placeholder="John"
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.errors.firstName ? (
          <div className="text-red-400 pt-2 font-medium">
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
          placeholder="Smith"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.errors.lastName ? (
          <div className="text-red-400 pt-2 font-medium">
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
          placeholder="Johnsmith@email.com"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.errors.email ? (
          <div className="text-red-400 pt-2 font-medium">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col pt-2">
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

      <div className="flex flex-col pt-2">
        <label htmlFor="name" className="text-lg">
          Confirm password
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder="Confirm password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
        />
        {formik.errors.confirmPassword ? (
          <div className="text-red-400 pt-2 font-medium">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>

      <button
        type="submit"
        defaultValue="Log In"
        className="bg-black rounded-sm text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      >
        Sign up
      </button>
    </form>
  );
}

export default Register;
