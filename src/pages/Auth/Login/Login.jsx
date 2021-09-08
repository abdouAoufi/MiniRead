import React, { useState } from "react";
import { useFormik } from "formik";
import LoginHandler from "./LoginHandler";
import { ICONS } from "../../../assets/assets";
import Loading from "../../../components/Loading";
import { login } from "../../../api/authservice";

function Login(props) {
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      setTimeout(() => {
        login(values)
          .then((result) => {
            setLoading(false);
            return result.json();
          })
          .then((data) => {
            props.setOpenModal(data);
          })
          .catch((err) => {
            throw Error(err);
          });
      }, 2000);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col pt-3 md:pt-8">
      <label className="flex flex-col-reverse relative mt-12 focus group">
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="your@email.com"
          className="border-2  rounded-sm border-primary outline-none  px-4 py-3  leading-9"
        />

        {formik.errors.email ? (
          <span className="ml-auto leading-10  text-red-400 font-semibold">
            {" "}
            {formik.errors.email}
          </span>
        ) : (
          <span className="ml-auto leading-10  text-red-400 opacity-0 font-semibold">
            hidden ared
          </span>
        )}
      </label>
      <label className="  flex flex-col-reverse relative mt-6 focus group">
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          className="border-2 rounded-sm border-primary outline-none  px-4 py-3 leading-9"
        />

        {formik.errors.password ? (
          <span className="ml-auto leading-10 text-red-400 font-semibold">
            {" "}
            {formik.errors.password}
          </span>
        ) : (
          <span className="ml-auto leading-10  text-red-400 opacity-0 font-semibold">
            hidden ared
          </span>
        )}
      </label>

      {!loading ? (
        <button
          type="submit"
          defaultValue="Log In"
          className="bg-black rounded-sm text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
        >
          Log in
        </button>
      ) : (
        <Loading />
      )}
    </form>
  );
}

export default Login;
