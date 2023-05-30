import loginAction from "@/actions/login";
import AuthInput from "@/components/AuthInput";
import AuthLayout from "@/layouts/AuthLayout";
import validateLogin from "@/utils/validateLogin";
import { Box, Button, Heading, Link, Spinner, Text } from "@chakra-ui/react";
import { useFormik } from "formik";
import { AttachCircle } from "iconsax-react";
import Head from "next/head";
import React, { useState } from "react";
import { FaEnvelopeOpen, FaLockOpen } from "react-icons/fa";

const login = () => {
  const [processing, setProcessing] = useState(false);
  const loginDetails = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validateLogin,
    onSubmit: (values) => {
      loginAction(values,setProcessing);
    },
  });
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <AuthLayout>
        <form onSubmit={loginDetails.handleSubmit}>
          <Heading my={4} fontSize={["30px"]} className="anton">
            Welcome back <br /> User👋🏽
          </Heading>
          <Text maxW={"350px"} fontSize={13}>
            Login with your Credentials 😜
          </Text>
          <Box>
            <AuthInput
              onChange={loginDetails.handleChange}
              value={loginDetails.values.email}
              error={loginDetails.errors.email}
              label={"Email"}
              name="email"
              placeholder={"example@email.com"}
              type={"email"}
              icon={FaEnvelopeOpen}
            />
          </Box>
          <AuthInput
            onChange={loginDetails.handleChange}
            value={loginDetails.values.password}
            error={loginDetails.errors.password}
            name="password"
            label={"Password"}
            icon={FaLockOpen}
            placeholder={"*********"}
            type={"password"}
          />
          <Button
            type={"submit"}
            w="full"
            h="60px"
            bg="#222"
            //   opacity={valid ? 1 : 0.5}
            color="#fff"
            mb={5}
          >
             {processing ? <Spinner /> : "Login"}
          </Button>
          <Link href="/forgotten-password" textDecor={"underline"}>
            Forgotten Password?
          </Link>{" "}
          <Text>
            Don't have an account?{" "}
            <Link href="/signup" textDecor={"underline"}>
              Register
            </Link>{" "}
          </Text>
          <Text></Text>
        </form>
      </AuthLayout>
    </>
  );
};

export default login;
