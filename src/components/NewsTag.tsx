import { Box, Flex, Text, Icon,Center } from '@chakra-ui/react'
import { VolumeHigh } from 'iconsax-react'
import React from 'react'

const NewsTag = () => {
  return (
    <Box mb={5}>
        <Flex borderRadius={30} bg="#111" py={2} px={5} align="center" gap={2}>
            <Center borderRadius={30} transform={"rotate(-40deg)"} h="30px" w="30px" bg="#333"><Icon color={"#ddd"} as={VolumeHigh} /></Center>
            <Text fontSize={13} color={"#ddd"}>We're Super Exicted for you to try ...</Text>
        </Flex>
    </Box>
  )
}

export default NewsTag