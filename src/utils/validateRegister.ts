import * as Yup from "yup";

const validateRegister = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  username: Yup.string().min(3, "Too Short").required("Required"),
  password: Yup.string()
    .min(6, "Length Must greater than 6")
    .required("Required"),
  // agreed: Yup.boolean().isFalse("f").required("You must agree to terms and conditions"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default validateRegister;
