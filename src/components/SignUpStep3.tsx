import {
  Heading,
  Text,
  Box,
  Checkbox,
  Flex,
  Button,
  Spinner,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AuthInput from "./AuthInput";
import { FaEnvelope, FaLockOpen } from "react-icons/fa";
const SignUpStep3 = ({ formik, stepUp,processing }: { formik: any; stepUp: any,processing :any }) => {
  const valid = !formik.errors.email && !formik.errors.password;
  return (
    <Box my={4}>
      <Heading my={4} fontSize={"30px"} className="anton">
        Thank You!👋🏽 <br />
        Enter email and create Password
      </Heading>
      <Text w={"350px"} fontSize={13}>
        Let’s get to know you! 😜
      </Text>
      <Box>
        <AuthInput
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
          label={"Email"}
          icon={FaEnvelope}
          error={formik.errors.email}
          placeholder={"example@email.com"}
          type={""}
        />
        <AuthInput
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
          name="password"
          label={"Password"}
          icon={FaLockOpen}
          placeholder={"*********"}
          type={"password"}
        />
      </Box>

      <Box>
        {/*   */}
        <Button
          type={"submit"}
          w="full"
          h="60px"
          pointerEvents={processing ? "none" : "auto"}
          bg="#222"
          opacity={valid || !processing ? 1 : 0.5}
          // disabled={!!valid}
          color="#fff"
          mb={5}
        >
          {processing ? <Spinner /> : "Sign Up"}
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpStep3;
