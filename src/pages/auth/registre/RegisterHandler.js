const RegisterHandler = () => {
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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
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

  return { validate };
};

export default RegisterHandler;
