import {
    Box,
    Heading,
    Center,
    Icon,
    Text,
    Flex,
    Image,
    Button,
  } from "@chakra-ui/react";
  import { AddCircle, Eye, Image as ImageIcon } from "iconsax-react";
  import React from "react";
  
const Feature2 = () => {
  return (
    <Box bg="#ddd" color="#000">
      <Center flexDirection={"column"} p={20}>
        <Box maxW="600" m="auto" textAlign="center">
          <Heading mt={20} className="anton" fontSize={"4xl"}>
            <Icon as={Eye} /> Visiblity For Your Entire Company
          </Heading>
          <Text my={5} fontSize={14}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque
            voluptatibus reiciendis consequatur, illum dolore delectus qui
            itaque cumque beatae.
          </Text>
          <Flex my={5} gap={4}>
            <Button
              fontSize={14}
              borderRadius={100}
              bg="#aaa"
              color="#000"
              leftIcon={<ImageIcon />}
            >
              Share Image
            </Button>
            <Button
              fontSize={14}
              className="disabled-btn"
              borderRadius={100}
              bg="#aaa"
              leftIcon={<ImageIcon />}
            >
              Create Post
            </Button>
            <Button
              fontSize={14}
              className="disabled-btn"
              borderRadius={100}
              bg="#aaa"
              leftIcon={<ImageIcon />}
            >
              Comments
            </Button>
            <Button
              fontSize={14}
              className="disabled-btn"
              leftIcon={<AddCircle />}
            >
              More
            </Button>
          </Flex>
          <Box w="100%" h="400px" borderRadius={10} bgSize={"cover"} bgImage="assets/app-screenshot.webp" />
        </Box>
      </Center>
    </Box>
  )
}

export default Feature2