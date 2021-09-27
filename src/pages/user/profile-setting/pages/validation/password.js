const validationHandler = () => {
  const validate = (values) => {
    const errors = {};

    if (!values.newPassword) {
      errors.newPassword = "Required!";
    }  
    if (!values.confirmNewPassword) {
      errors.confirmNewPassword = "Required!";
    } else if (values.password.length < 8) {
      errors.confirmNewPassword = "Invalid pp!";
    }
    if (values.confirmNewPassword !== values.newPassword) {
      errors.newPassword = "Passwords don't match!";
      errors.confirmNewPassword = "Passwords don't match!";
    }

    if (!values.password) {
      errors.password = "Required!";
    } else if (values.password.length < 8) {
      errors.password = "Invalid password!";
    }
    return errors;
  };
  return { validate };
};

export default validationHandler;
