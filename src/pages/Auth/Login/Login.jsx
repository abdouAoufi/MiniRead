import React from "react";
import { useFormik } from "formik";
import LoginHandler from "./LoginHandler";
import { ICONS } from "../../../assets/assets";

function Login(props) {
  const openModal = () => {
    props.setOpenModal();
  };
  const { validate } = LoginHandler();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col pt-3 md:pt-8">
      <label className="flex flex-col-reverse relative focus group">
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="your@email.com"
          className="border-2  rounded-sm border-primary outline-none px-4 py-3  leading-9"
        />

        {formik.errors.email ? (
          <span className="ml-auto leading-10 text-red-400 font-semibold">
            {" "}
            {formik.errors.email}
          </span>
        ) : (
          <div className="ml-auto my-3  ">
            <img className="h-5 w-5 inline-block mr-2" src={ICONS.validate} />
          </div>
        )}
      </label>
      <label className="mt-4 flex flex-col-reverse relative focus group">
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          className="border-2 rounded-sm border-primary outline-none px-4 py-3 leading-9"
        />

        {formik.errors.password ? (
          <span className="ml-auto leading-10 text-red-400 font-semibold">
            {" "}
            {formik.errors.password}
          </span>
        ) : (
          <div className="ml-auto my-3   ">
            <img className=" h-5 w-5 inline-block mr-2" src={ICONS.validate} />
          </div>
        )}
      </label>

      <button
        type="submit"
        defaultValue="Log In"
        className="bg-black rounded-sm text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
      >
        Log in
      </button>
    </form>
  );
}

export default Login;
