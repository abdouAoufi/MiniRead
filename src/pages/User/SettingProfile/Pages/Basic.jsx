import React from "react";
import { useFormik } from "formik";
import Button from "../../../../components/Button/Button";

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
  if (!values.work) {
    errors.lastName = "Required!";
  } else if (values.lastName.length > 15 || values.lastName.length < 2) {
    errors.lastName = "Invalid last name!";
  }
};

function Basic() {
  const formik = useFormik({
    initialValues: {
      firstName: "Aoufi",
      lastName: "Abderahmane",
      Job: "Developer",
    },
    validate,
    onSubmit: (values) => {
      let status = 0;
    },
  });

  return (
    <div className="w-full h-full relative">
      <p className="text-center font-semibold text-lg">Basic information</p>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col pt-3 md:pt-8"
      >
        <div className="flex flex-col pt-2">
          <label htmlFor="name" className="text-sm">
            Your First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder="John"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.firstName ? (
            <div className="text-red-400 pt-2">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="flex flex-col pt-2">
          <label htmlFor="name" className="text-sm">
            Your last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder="John"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.lastName ? (
            <div className="text-red-400 pt-2">{formik.errors.lastName}</div>
          ) : null}
        </div>

        <div className="flex flex-col pt-2">
          <label htmlFor="name" className="text-sm">
            Your job
          </label>
          <input
            id="job"
            name="job"
            type="job"
            onChange={formik.handleChange}
            value={formik.values.job}
            placeholder="Writer"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.job ? (
            <div className="text-red-400 pt-2">{formik.errors.job}</div>
          ) : null}
        </div>
      </form>
      <div className="absolute flex right-0 bottom-0">
        <Button text="Cancel" />
        <Button text="Update" primary />
      </div>
    </div>
  );
}

export default Basic;
