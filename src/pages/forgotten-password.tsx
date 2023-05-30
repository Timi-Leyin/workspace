import AuthInput from "@/components/AuthInput";
import AuthLayout from "@/layouts/AuthLayout";
import { Box, Button, Heading, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { FaEnvelopeOpen } from "react-icons/fa";

const ForgottenPassword = () => {
  return (
    <>
      <Head>
        <title>Forgotten Password</title>
      </Head>

      <AuthLayout>
        <form>
          <Heading my={4} fontSize={["30px"]} className="anton">
            Recover your Account 👋🏽
          </Heading>
          <Text maxW={"350px"} fontSize={13}>
            Find your account by email
          </Text>
          <Box>
            <AuthInput
              //   onChange={formik.handleChange}
              //   value={formik.values.username}
              //   error={formik.errors.username}
              label={"email"}
              name="email"
              placeholder={"example@gmail.com"}
              type={"text"}
              icon={FaEnvelopeOpen}
            />
          </Box>
          <Button
            type={"button"}
            w="full"
            h="60px"
            bg="#222"
            //   opacity={valid ? 1 : 0.5}
            color="#fff"
            mb={5}
          >
            Send Verification
          </Button>
          <Link href="/login" textDecor={"underline"}>
            Login with Password
          </Link>{" "}
          <Text></Text>
        </form>
      </AuthLayout>
    </>
  );
};

export default ForgottenPassword;
