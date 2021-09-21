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
    if (!values.newPassword) {
      errors.newPassword = "Required!";
    } else if (values.newPassword.length > 15 || values.newPassword.length < 8) {
      errors.newPassword = "Invalid password!";
    }

    if (!values.confirmNewPassword) {
      errors.confirmNewPassword = "Required!";
    } else if (values.confirmNewPassword.length > 15 || values.confirmNewPassword.length < 8) {
      errors.confirmNewPassword = "Invalid password!";
    }
   
    if (values.newPassword !== values.confirmNewPassword) {
      errors.newPassword = "Passwords don't match!";
      errors.confirmNewPassword = "Passwords don't match!";
    }

    return errors;
  };

  return {
    validate
  };
};

export default RegisterHandler;