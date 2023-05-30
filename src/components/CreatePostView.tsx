import { Avatar, Box, Button, Flex, Icon, Input, Text } from "@chakra-ui/react";
import { PenAdd } from "iconsax-react";
import React from "react";
import { FaImage, FaVideo } from "react-icons/fa";

const CreatePostView = () => {
  return (
    <Box>
      <Flex gap={2} mx={3} align={"center"}>
        <Avatar />
       <Flex py={2} align={"center"} borderRadius={10} justify={"space-between"} px={2} bg="#333" w="full">
       <Input height={"30px"} border={"none"} w="full" fontSize={13} placeholder="What are you working on" />
       <Button color="#000" fontSize={13} rightIcon={<PenAdd size={13} />}>Post</Button>
      </Flex>
    </Flex>
    </Box>
  );
};

export default CreatePostView;
