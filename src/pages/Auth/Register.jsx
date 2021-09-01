import React, { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required!";
  } else if (values.firstName.length > 15 || values.firstName.length < 2) {
    errors.firstName = "Invalid first name!";
  }
  if (!values.lastName) {
    errors.lastName = "Required!";
  } else if (values.lastName.length > 15 || values.lastName.length < 2) {
    errors.lastName = "Invalid last name!";
  }
  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required!";
  } else if (values.password.length > 15 || values.password.length < 8) {
    errors.password = "Invalid password!";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required!";
  } else if (
    values.confirmPassword.length > 15 ||
    values.confirmPassword.length < 8
  ) {
    errors.confirmPassword = "Invalid password!";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords don't match!";
    errors.password = "Passwords don't match!";
  }

  return errors;
};

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
      alert(JSON.stringify(values, null, 2));
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
