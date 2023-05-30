import { Avatar, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Heart } from "iconsax-react";
import React from "react";

const reactions = [{ name: "love", icon: "" }];

const Feed = () => {
  return (
    <Box my={10}>
      <Flex align={"center"} gap={2}>
        <Avatar size={"sm"} />
        <Box>
          <Heading fontSize={15}>Timi-Leyin</Heading>
          <Text fontSize={10}>Jan 20</Text>
        </Box>
      </Flex>
      <Box>
        <Text my={2} fontSize={12}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, in eum
          ratione labore voluptate reprehenderit aliquam. Similique fugit
          assumenda odit quae laboriosam vero recusandae eius voluptatum libero.
          Voluptate adipisci eaque culpa laudantium iste rerum doloremque quia
          atque velit veniam recusandae nisi minus, voluptatum molestiae
          corporis dicta quae quibusdam, temporibus odit!
        </Text>
      </Box>
      <Box my={3}>
          ...
        </Box>
      <Flex align="center" gap={2}>
        <Flex p={2} px={4} borderRadius={20} bg="#444" gap={1} fontSize={12}>
          <Text display="inline" fontWeight={"bold"}>4</Text> Comments
        </Flex>
        {reactions.map((reaction, i) => (
          <Flex gap={1} cursor={"pointer"} align="center" justify={"center"} p={2} px={4} key={i} borderRadius={20} bg="#333" fontSize={12}>
            <Heart variant="Bold" color="red" size={12} />
            <Text fontSize={10}>1</Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Feed;
