import { Heading, Text, Box, Checkbox, Flex, Button } from "@chakra-ui/react";
import React from "react";
import AuthInput from "./AuthInput";
import { UserOctagon } from "iconsax-react";
import { valid } from "joi";
const SignUpStep2 = ({ formik, stepUp }: { formik: any; stepUp: any }) => {
  const valid = !formik.errors.firstName && !formik.errors.lastName;

  return (
    <Box my={4}>
      <Heading my={4} fontSize={"30px"}  className="anton">
        Hey There!👋🏽 <br /> Please give us your Legal Name
      </Heading>
      <Text w={"350px"} fontSize={13}>
        Let’s get to know you! 😜
      </Text>
      <Box>
        <AuthInput
          icon={UserOctagon}
          onChange={formik.handleChange}
          value={formik.values.firstName}
          name="firstName"
          error={formik.errors.firstName}
          label={"First Name"}
          placeholder={"John"}
          type={"text"}
        />
        <AuthInput
          icon={UserOctagon}
          onChange={formik.handleChange}
          error={formik.errors.lastName}
          value={formik.values.lastName}
          name="lastName"
          label={"Last Name"}
          placeholder={"Doe"}
          type={"text"}
        />
      </Box>

      <Box>
        {/*   */}
        <Button
          type={"button"}
          w="full"
          h="60px"
          onClick={valid ? stepUp : undefined}
          bg="#222"
          opacity={valid ? 1 : 0.5}
          // disabled={!!valid}
          color="#fff"
          mb={5}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpStep2;
