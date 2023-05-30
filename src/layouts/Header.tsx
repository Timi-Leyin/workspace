import { Button, ButtonGroup, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <Flex
      zIndex={10}
      justify={"space-between"}
      px={10}
      py={7}
      pos="absolute"
      top={0}
      w="full"
      left={0}
      align={"center"}
    >
      <Link href={"/"}>
        {" "}
        <Image w="150px" src="/assets/logo.png" />
      </Link>

      <ButtonGroup>
        <Link href="/login">
          <Button bg="none">Log in</Button>
        </Link>
        <Link href="/signup">
          <Button px={10} borderRadius={100} className="btn-primary">
            Sign Up
          </Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
