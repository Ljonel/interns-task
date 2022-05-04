import React from "react";
import { ErrorIcon, ErrorText } from "../styles/EditInternStyles";
import alertCircle from "../assets/icons/alert-circle.svg";

function FormInput({ handleChange, errors, values, name, label }) {
  return (
    <div className="form-element">
      <h3>{label}</h3>
      <input
        type="text"
        name={name}
        defaultValue={values[name]}
        onChange={handleChange}
        className={errors[name] ? "error" : ""}
        onBlur={handleChange}
      />
      {errors[name] ? (
        <ErrorIcon>
          <img src={alertCircle} alt="alert-circle" />
        </ErrorIcon>
      ) : null}
      <ErrorText>{errors[name]}</ErrorText>
    </div>
  );
}

export default FormInput;
