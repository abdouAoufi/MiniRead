const validationHandler = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.newPassword) {
      errors.newPassword = "Required!";
    } else if (values.password.length > 15 || values.password.length < 8) {
      errors.newPassword = "Invalid password!";
    }
    if (!values.confirmNewPassword) {
      errors.confirmNewPassword = "Required!";
    } else if (values.password.length > 15 || values.password.length < 8) {
      errors.confirmNewPassword = "Invalid password!";
    }

    if (!values.password) {
      errors.password = "Required!";
    } else if (values.password.length > 15 || values.password.length < 8) {
      errors.password = "Invalid password!";
    }
    return errors;
  };
  return { validate };
};

export default validationHandler;
