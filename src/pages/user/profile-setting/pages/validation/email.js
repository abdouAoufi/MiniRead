const validationHandler = () => {
  const validate = (values) => {
    const errors = {};
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
    return errors;
  };
  return { validate };
};

export default validationHandler;
