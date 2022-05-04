import React from "react";
import { ErrorIcon, ErrorText } from "../styles/EditInternStyles";
import alertCircle from "../assets/icons/alert-circle.svg";
import datePicker from "../assets/icons/calendar.svg";

function FormDateInput({ handleChange, values, errors, name, label }) {
  return (
    <div className="form-element-date">
      <h3>{label}</h3>
      <input
        type="date"
        id={name}
        name={name}
        defaultValue={values[name].substring(0, 10)}
        onChange={handleChange}
        onBlur={handleChange}
        className={errors[name] ? "error" : ""}
      />
      <label className="datepicker-icon" htmlFor={name}>
        <img src={datePicker} alt="date-picker" />
      </label>
      {errors[name] ? (
        <ErrorIcon className="date-icon-error">
          <img src={alertCircle} alt="alert-circle" />
        </ErrorIcon>
      ) : null}
      <ErrorText>{errors[name]}</ErrorText>
    </div>
  );
}

export default FormDateInput;
