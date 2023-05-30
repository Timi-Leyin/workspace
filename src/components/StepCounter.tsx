import { Flex, Divider } from "@chakra-ui/react";
import React, { useEffect } from "react";

const StepCounter = ({
  step = 1,
  setStep,
  formik,
}: {
  step: number;
  setStep: any;
  formik: any;
}) => {
  const step1Valid = !formik.errors.username && formik.values.agreed;
  const step2Valid = !formik.errors.firstName && !formik.errors.lastName;
  const step3Valid = !formik.errors.email && !formik.errors.password;
  const valid = [!step1Valid,!step2Valid,!step3Valid ]
  // useEffect(() => {
  //   if (!step1Valid) {
  //     setStep(1);
  //   } else if (!step2Valid) {
  //     setStep(2);
  //   } else if (!step3Valid) {
  //     setStep(3);
  //   }
  //   console.log("test")
  // }, [formik.values]);
  return (
    <Flex gap={3} mb={2}   className="step-divider" w="300px">
      {[1, 2, 3, 4].map((v, i) => (
        <Divider
          key={i}
        
          borderColor={valid[i]? "red":"#ddd"}
          cursor={"pointer"}
          borderWidth={4}
          borderRadius={20}
          onClick={() => v!=4 && setStep(i + 1)}
          opacity={step >= i + 1 ? 1 : 0.5}
        />
      ))}
    </Flex>
  );
};

export default StepCounter;
