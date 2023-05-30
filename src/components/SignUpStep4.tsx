import { Heading, Text, Box, Checkbox, Flex, Button } from "@chakra-ui/react";

const SignUpStep4 = ({ formik, stepUp,step }: { formik: any; stepUp: any,step:number }) => {
  const valid = !formik.errors.email && !formik.errors.password;

  return (
    <Box my={4}>
      <Heading my={4} fontSize={"30px"}  className="anton">
        Registered <br />Successfully!👋🏽 
      </Heading>
      <Text w={"350px"} fontSize={13}>
       You can now proceed to your feed.😜
      </Text>
    
      <Box mt={5}>
        {/*   */}
        <Button
          type={"button"}
          w="full"
          h="60px"
          onClick={valid && step<4? stepUp : undefined}
          bg="#222"
          opacity={valid ? 1 : 0.5}
          // disabled={!!valid}
          color="#fff"
          mb={5}
        >
          Proceed
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpStep4;
