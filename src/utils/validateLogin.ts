import * as Yup from "yup";

const validateLogin = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default validateLogin;
