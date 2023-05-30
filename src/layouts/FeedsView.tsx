import CreatePostView from '@/components/CreatePostView'
import Feed from '@/components/Feed'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { FaChartLine } from 'react-icons/fa'

const FeedsView = () => {
  return (
  <Box>
    <Flex py={2} borderBottom="1px solid #333" align="center" gap={2}>
      <Icon fontSize={"md"}  as={FaChartLine} />
      <Text fontSize={"xl"} fontWeight={"bold"} className="anton-">Latest</Text>
    </Flex>
    <Box maxW="700px" mx="auto" my={5}>
      <CreatePostView />

      <Feed />
    </Box>
  </Box>
  )
}

export default FeedsView