import NewsTag from "@/components/NewsTag";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { ArrowCircleRight2 } from "iconsax-react";
import React from "react";
import Footer from "./Footer";

const Cta = () => {
  return (
    <Box
      as="section"
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pos="relative"
      flexDir={"column"}
      bg="#9248fe"
      minH="100vh"
    >
      <Box>
        <Box
          w="500px"
          h="500px"
          bg="blue.900"
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
          <Heading
            p={4}
            color={"#fff"}
            className={"anton"}
            fontSize={"7xl"}
            maxW="800px"
            m="auto"
          >
            Get Started With TeamSite for Free
          </Heading>
          <Button
            rightIcon={<ArrowCircleRight2 />}
            className="btn-primary"
            w="300px"
            h="60px"
            borderRadius={"80"}
            my={5}
          >
            Get Started
          </Button>
        </Center>
      </Box>

      <Footer />
    </Box>
  );
};

export default Cta;
