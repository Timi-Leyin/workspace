import { Avatar, Box, Button, Center, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const UserAttach = () => {
  return (
    <Box my={2} color={"#000"}>
        <Flex align={"center"} gap={1} justify={"space-between"}>
          <Menu>
            <MenuButton w="full">
            <Flex color="#fff" bg="#333" borderRadius={10} mx={2} py={2} px={3} justifyContent={"space-between"} alignItems={"center"}>
            <Text>Teams</Text>
              <Icon as={FaChevronDown} />
            </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem>Play plus</MenuItem>
              <MenuItem>Eddify</MenuItem>
              <MenuItem>Lite Web</MenuItem>
            </MenuList>
          </Menu>
          <Avatar size={"sm"} />
        </Flex>
    </Box>
  )
}

export default UserAttach