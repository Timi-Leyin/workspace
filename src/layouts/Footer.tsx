import { Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <Flex w="full" py={4} align={"center"} justify={"space-around"}>
    <Image w="150px" src="/assets/logo.png" />

    <Flex gap={10}>
        <Link href={""}>Contact</Link>
        <Link href={""}>Privacy</Link>
        <Link href={""}>Terms</Link>
    </Flex>
   </Flex>
  )
}

export default Footer