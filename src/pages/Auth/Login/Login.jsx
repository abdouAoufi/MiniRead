import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import LoginHandler from "./LoginHandler";
import { ICONS } from "../../../assets/assets";
import Loading from "../../../components/Loading";
import { login } from "../../../api/authservice";
import { AuthContext } from "../../../contexts/AuthContext";

function Login(props) {
  const { userName, setUserName } = useContext(AuthContext);
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
            console.log(result);
            return result.json();
          })
          .then((data) => {
            props.setOpenModal(data);
            if (data.status === 200 || data.status === 201) {
              let updatedUserName = { ...userName };
              updatedUserName.firstName = data.user.firstName;
              updatedUserName.lastName = data.user.lastName;
              setUserName(updatedUserName);
            }
          })
          .catch((err) => {
            props.setOpenModal({
              title: "Something went wrong!",
              message: err.message ?? "There is potentially error in network",
            });
          });
      }, 300);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col pt-3 md:pt-8">
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
