import React from "react";

function Input(props) {
  return (
    <div className="flex flex-col pt-2">
      <label htmlFor={props.basic.name} className="text-md text-black">
        {props.basic.label}
      </label>
      <input
        id={props.basic.id}
        name={props.basic.name}
        type={props.basic.type}
        onChange={props.changeProp.handleChange}
        value={props.changeProp.email}
        placeholder={props.basic.placeholder}
        className="simple-input focus:outline-none"
      />
      {props.changeProp.error ? (
        <div className="error-text">{props.changeProp.error}</div>
      ) : null}
    </div>
  );
}

export default Input;
