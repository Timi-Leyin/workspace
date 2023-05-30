import AuthLayout from "@/layouts/AuthLayout";
import register from "@/actions/register";
import SignUpStep1 from "@/components/SignUpStep1";
import SignUpStep2 from "@/components/SignUpStep2";
import SignUpStep3 from "@/components/SignUpStep3";
import SignUpStep4 from "@/components/SignUpStep4";
import StepCounter from "@/components/StepCounter";
import useStepStore from "@/hooks/useStepStore";
import validateRegister from "@/utils/validateRegister";
import {
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState } from "react";
import Head from "next/head";
const signup = () => {
  // Step State
  const step = useStepStore((state: any) => state.step);
  const stepUp = useStepStore((state: any) => state.stepUp);
  const setStep = useStepStore((state: any) => state.setStep);

  const [processing, setProcessing] = useState(false);

  const signUp = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreed: false,
    },
    validationSchema: validateRegister,
    onSubmit: (values) => {
      register(values,setProcessing);
    },
  });

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <AuthLayout>
        {/* signUP */}
        <Box>
          <Text fontSize={12} color={"#fff"} mb={2}>
            Step {step}
            <Text as="span" opacity={0.3}>
              /4
            </Text>
          </Text>
          <StepCounter formik={signUp} setStep={setStep} step={step} />
        </Box>

        <form onSubmit={signUp.handleSubmit}>
          {step == 1 ? (
            <SignUpStep1 formik={signUp} stepUp={stepUp} />
          ) : step == 2 ? (
            <SignUpStep2 formik={signUp} stepUp={stepUp} />
          ) : step == 3 ? (
            <SignUpStep3 processing={processing} formik={signUp} stepUp={stepUp} />
          ) : (
            <SignUpStep4 formik={signUp} step={step} stepUp={stepUp} />
          )}

          {step != 4 && (
            <Text>
              Already have an account?{" "}
              <Link href="/login" textDecor={"underline"}>
                Sign In
              </Link>{" "}
            </Text>
          )}
        </form>
        {/* signup end */}
      </AuthLayout>
    </>
  );
};

export default signup;
