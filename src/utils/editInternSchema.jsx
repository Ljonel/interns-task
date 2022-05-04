import * as yup from "yup";

const parseDateString = (value, originalValue) => {
  const date = new Date(originalValue.slice(0, 10));
  return date;
};

const validationSchema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("This email is not correct")
    .required("This field is required"),
  internshipStart: yup
    .date()
    .transform(parseDateString)
    .min("1900-01-01", `Year shoud be later than 1000`)
    .typeError("This date is not correct")
    .nullable()
    .max(yup.ref("internshipEnd") || "9999-01-01", "This date is not correct")
    .required("This date is not correct"),
  internshipEnd: yup
    .date()
    .typeError("This date is not correct")
    .transform(parseDateString)
    .min(yup.ref("internshipStart") || "1900-01-01", "This date is not correct")
    .max("9999-01-01", `We don't live that long hehe :)`)
    .required("This date is not correct"),
});

export { validationSchema };
