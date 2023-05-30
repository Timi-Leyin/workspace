import NewsTag from "@/components/NewsTag";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { ArrowCircleRight2 } from "iconsax-react";
import React from "react";

const Hero = () => {
  return (
    <Box as="section"  pos="relative" bg="#9248fe" minH="100vh">
      <Box
        w="500px"
        h="500px"
        bg="purple.900"
        zIndex={1}
        top={"50%"}
        transform={"translate(-50%, -30%)"}
        left={"50%"}
        borderRadius={300}
        pos="absolute"
        filter={"blur(100px)"}
      />
      <Center
        pos="relative"
        zIndex={2}
        textAlign={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        p={40}
      >
        <NewsTag />
        <Heading p={4} color={"#fff"} className={"anton"} fontSize={"7xl"} maxW="800px" m="auto">
          Where Teams share Screenshots
        </Heading>
        <Button rightIcon={<ArrowCircleRight2 />} className="btn-primary" w="300px" h="60px" borderRadius={"80"} my={5}>
          Get Started
        </Button>
        <Text fontSize={12} color="#fff" opacity={0.4}>
          Free Forever - no cc Required
        </Text>
      </Center>
    </Box>
  );
};

export default Hero;
