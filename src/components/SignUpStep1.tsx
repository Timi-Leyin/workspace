import {
  Heading,
  Text,
  Box,
  Checkbox,
  Flex,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import AuthInput from "./AuthInput";
import { AttachCircle, User } from "iconsax-react";
import { useFormik } from "formik";

const SignUpStep1 = ({ formik, stepUp }: { formik: any; stepUp: any }) => {
  const valid = !formik.errors.username && formik.values.agreed;
  // console.log(formik.values)
  return (
    <>
      <Heading my={4} fontSize={["30px"]} className="anton">
        Hey 👋🏽 <br /> Welcome to Team Site
      </Heading>
      <Text maxW={"350px"} fontSize={13}>
        Let’s get to know you! We’ll need you to choose a really cool name that
        other users can find you with, choose something cool like superman, or
        batman 😜
      </Text>
      <Box>
        <AuthInput
          onChange={formik.handleChange}
          value={formik.values.username}
          label={"username"}
          error={formik.errors.username}
          name="username"
          placeholder={"OriginalTimi"}
          type={"text"}
          icon={AttachCircle}
        />
      </Box>

      <Flex align={"center"} gap={2} my={5} alignItems={"center"}>
        <input
          type="checkbox"
          onChange={formik.handleChange}
          name="agreed"
          id="agreed"
          checked={formik.values.agreed}
        />
        <Text fontSize={12}>
          I agree to Team Site's Terms & conditions and privacy policy
        </Text>
      </Flex>

      <Box>
        {/*   */}
        <Button
          type={"button"}
          w="full"
          h="60px"
          onClick={valid ? stepUp : undefined}
          bg="#222"
          opacity={valid ? 1 : 0.5}
          color="#fff"
          mb={5}
        >
          Continue
        </Button>
      </Box>
    </>
  );
};

export default SignUpStep1;
