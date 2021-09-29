import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import RegisterHandler from "./RegisterHandler";
import { signup } from "../../../api/auth-service";
import Loading from "../../../components/layout@/loading/Loading";
import { WindowContext } from "../../../contexts/window_context";
import Input from "../../../components/layout@/input/input";

const { validate } = RegisterHandler();

function Register({ switchAuthState, update }) {
  const [loading, setLoading] = useState(false);
  const { setMessageWindow } = useContext(WindowContext);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: async (values) => {
      handleSignup(values);
    },
  });

  const handleSignup = async (credentials) => {
    if (!credentials) return;
    let status = 422;
    setLoading(true);
    try {
      const response = await signup(credentials);
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

  const SIGNUP_INPUT = Object.freeze({
    firstName: {
      basic: {
        label: "First name",
        id: "firstName",
        name: "firstName",
        type: "text",
        placeholder: "john",
      },
      changeProp: {
        value: formik.values.firstName,
        handleChange: formik.handleChange,
        error: formik.errors.firstName,
      },
    },
    lastName: {
      basic: {
        label: "Last name",
        id: "lastName",
        name: "lastName",
        type: "text",
        placeholder: "smith",
      },
      changeProp: {
        value: formik.values.lastName,
        handleChange: formik.handleChange,
        error: formik.errors.lastName,
      },
    },
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
    confirmPassword: {
      basic: {
        label: "Confirm password",
        id: "confirmPassword",
        name: "confirmPassword",
        type: "password",
        placeholder: "Your password",
      },
      changeProp: {
        value: formik.values.confirmPassword,
        handleChange: formik.handleChange,
        error: formik.errors.confirmPassword,
      },
    },
  });
  return (
    <div className="">
      <form className="form" onSubmit={formik.handleSubmit}>
        <Input
          basic={SIGNUP_INPUT.firstName.basic}
          changeProp={SIGNUP_INPUT.firstName.changeProp}
        />
        <Input
          basic={SIGNUP_INPUT.lastName.basic}
          changeProp={SIGNUP_INPUT.lastName.changeProp}
        />
        <Input
          basic={SIGNUP_INPUT.email.basic}
          changeProp={SIGNUP_INPUT.email.changeProp}
        />
        <Input
          basic={SIGNUP_INPUT.password.basic}
          changeProp={SIGNUP_INPUT.password.changeProp}
        />
        <Input
          basic={SIGNUP_INPUT.confirmPassword.basic}
          changeProp={SIGNUP_INPUT.confirmPassword.changeProp}
        />

        {!loading ? (
          <button type="submit" defaultValue="Log In" className="auth-btn">
            Sign up
          </button>
        ) : (
          <Loading />
        )}
      </form>

      <p className="mt-6 text-center font-medium text-black">
        If you have account you can{" "}
        <span className="highlight-text-dark" onClick={switchAuthState}>
          log in
        </span>{" "}
        now{" "}
      </p>
    </div>
  );
}

export default Register;
