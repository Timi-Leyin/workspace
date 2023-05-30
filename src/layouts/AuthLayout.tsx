import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: any }) => {
  return (
    <Box
      className="authLayout"
      as="section"
      py={10}
      px={30}
      pos="relative"
      bg="#9248fe"
      minH="100vh"
    >
      <Box maxW="400px" mx={"auto"} my={5}>
        <Link href={"/"}>
          {" "}
          <Image mb={10} src="/assets/vercel.svg" w="120px" />
        </Link>

        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
