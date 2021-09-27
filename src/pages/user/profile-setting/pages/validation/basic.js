const validationHandler = () => {
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
