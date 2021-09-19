import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import LoginHandler from "./LoginHandler";
import Loading from "../../../components/Loading";
import { login } from "../../../api/authservice";
import { AuthContext } from "../../../contexts/AuthContext";
import { WindowContext } from "../../../contexts/Windowcontenxt";
import { print } from "../../../utils/function";
import { useHistory } from "react-router-dom";
import { saveToken } from "../../../services/tokenservice";

function Login({ switchAuthState }) {
  const history = useHistory();
  const { userName, setUserName, setToken, setLogged, isLogged } =
    useContext(AuthContext);
  // if (isLogged) {
  //   history.replace("/");
  // }
  const { setMessageWindow } = useContext(WindowContext);
  const [loading, setLoading] = useState(false);
  const { validate } = LoginHandler();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      let status = 0;
      setLoading(true);
      try {
        const response = await login(values);
        if (response) {
          setLoading(false);
          status = response.status;
        }
        const responceData = await response.json();
        if (status >= 400) {
          return setMessageWindow(responceData.title, responceData.message);
        }

        setUserInfo(responceData.user, responceData.token);
        history.replace("/");
      } catch (err) {
        setMessageWindow(
          "Error something went wrong!",
          err.message || "Error something went wrong!"
        );
      }
    },
  });

  const setUserInfo = (user, token) => {
    let updatedUserName = { ...userName };
    updatedUserName.firstName = user.firstName;
    updatedUserName.lastName = user.lastName;
    saveToken(token, user.userID);
    setUserName(updatedUserName);
    setToken(token);
    setLogged(true);
  };

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col pt-3 md:pt-8"
      >
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
      <p className="mt-6 text-center font-medium text-black">
        If you dont have account you can{" "}
        <span
          className="text-secondary-dark font-bold cursor-pointer"
          onClick={switchAuthState}
        >
          Register
        </span>{" "}
        now{" "}
      </p>
    </div>
  );
}

export default Login;
