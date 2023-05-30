import Head from "next/head";
import { Box, Flex, Heading, Image, Link } from "@chakra-ui/react";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import Feature1 from "@/layouts/Feature1";
import Feature2 from "@/layouts/Feature2";
import Cta from "@/layouts/Cta";

export default function Home() {
  return (
    <>
      <Head>
        <title>TeamSite</title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
         <Header />
         <Hero />
         <Feature1 />
         <Feature2 />
         <Cta />
      </Box>
    </>
  );
}
