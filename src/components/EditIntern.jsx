import React from "react";
import { useParams } from "react-router";
import { NavLink, useNavigate } from "react-router-dom";
import arrowLeft from "../assets/icons/arrow-left.svg";
import { Formik } from "formik";
import {
  EditInternsContainer,
  EditContainer,
  Form,
} from "../styles/EditInternStyles";
import useGetIntern from "../hooks/useGetIntern";
import { validationSchema } from "../utils/editInternSchema";
import { formatApiDateTime } from "../utils/dates";
import FormInput from "./FormInput";
import FormDateInput from "./FormDateInput";

const EditIntern = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const intern = useGetIntern(id);

  const onSubmit = async (values) => {
    const newValues = {
      ...values,
      internshipStart: formatApiDateTime(values.internshipStart),
      internshipEnd: formatApiDateTime(values.internshipEnd),
    };

    try {
      await fetch(`http://localhost:3001/interns/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newValues),
      });
      navigate("/");
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <EditContainer>
      <NavLink to="/">
        <img src={arrowLeft} alt="arrow-left" />
        Back to list
      </NavLink>
      <EditInternsContainer>
        <h1>Edit</h1>
        <Formik
          enableReinitialize
          initialValues={intern}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={onSubmit}
        >
          {({ handleChange, handleSubmit, errors, values }) => (
            <Form onSubmit={handleSubmit}>
              <FormInput
                handleChange={handleChange}
                errors={errors}
                values={values}
                name="name"
                label="Full name *"
              />
              <FormInput
                handleChange={handleChange}
                errors={errors}
                values={values}
                name="email"
                label="Email address *"
              />
              <div className="form-element date">
                <FormDateInput
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  name="internshipStart"
                  label="Internship start *"
                />
                <FormDateInput
                  handleChange={handleChange}
                  values={values}
                  errors={errors}
                  name="internshipEnd"
                  label="Internship end *"
                />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </EditInternsContainer>
    </EditContainer>
  );
};

export default EditIntern;
