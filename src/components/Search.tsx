import { Flex, Input, Tag } from '@chakra-ui/react'
import { Command } from 'iconsax-react'
import React from 'react'

const Search = () => {
  return (
    <Flex p={1} mx={2} borderRadius={10} bg="#333" my={4} gap={2}>
        <Input type="search" fontSize={15} bg="none" border={"none"} outline={"none"} placeholder='Search' />
        <Tag px={4} color="#444" fontWeight={"bold"}><Command size={16} /></Tag>
    </Flex>
  )
}

export default Search