import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import LoginHandler from "./login-handler";
import Loading from "../../../components/layout@/loading/Loading";
import { login } from "../../../api/auth-service";
import { WindowContext } from "../../../contexts/window_context";
import { useHistory } from "react-router-dom";
import Input from "../../../components/layout@/input/input";

function Login({ switchAuthState }) {
  const history = useHistory();
  const { setMessageWindow } = useContext(WindowContext);
  const [loading, setLoading] = useState(false);
  const { validate } = LoginHandler();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = async (credentials) => {
    if (!credentials) return;
    let status = 422;
    setLoading(true);
    try {
      const response = await login(credentials);
      if (response) {
        setLoading(false);
        status = response.status;
      }
      const responceData = await response.json();
      handleResponse(responceData, status);
    } catch (err) {
      setLoading(false);
      setMessageWindow(
        "Error something went wrong!",
        err.message || "Error something went wrong!"
      );
    }
  };

  const handleResponse = (response, status) => {
    if (status >= 400) {
      return setMessageWindow(response.title, response.message);
    }
    if (!response.user.isCompleted) {
      continueSignUp();
    } else {
      goHome();
    }
  };

  const goHome = () => {
    return history.replace("/");
  };
  const continueSignUp = () => {
    return history.replace("/add-userinfo");
  };

  const LOGIN_INPUT = Object.freeze({
    email: {
      basic: {
        label: "Email adress",
        id: "eamil",
        name: "email",
        type: "email",
        placeholder: "Johnsmith@email.com",
      },
      changeProp: {
        value: formik.values.email,
        handleChange: formik.handleChange,
        error: formik.errors.email,
      },
    },
    password: {
      basic: {
        label: "Your password",
        id: "password",
        name: "password",
        type: "password",
        placeholder: "Your password",
      },
      changeProp: {
        value: formik.values.password,
        handleChange: formik.handleChange,
        error: formik.errors.password,
      },
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="form">
        <Input
          basic={LOGIN_INPUT.email.basic}
          changeProp={LOGIN_INPUT.email.changeProp}
        />
        <Input
          basic={LOGIN_INPUT.password.basic}
          changeProp={LOGIN_INPUT.password.changeProp}
        />

        {!loading ? (
          <button type="submit" defaultValue="Log In" className="auth-btn">
            Log in
          </button>
        ) : (
          <Loading />
        )}
      </form>
      <p className="mt-6 text">
        If you dont have account you can{" "}
        <span className="highlight-text-dark" onClick={switchAuthState}>
          register
        </span>{" "}
        now{" "}
      </p>
    </div>
  );
}

export default Login;
