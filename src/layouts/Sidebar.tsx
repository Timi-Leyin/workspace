import Search from "@/components/Search";
import UserAttach from "@/components/UserAttach";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { Box2, CloudChange, Logout, SearchFavorite, Tag2 } from "iconsax-react";
import React from "react";
import { FaChartArea, FaLightbulb, FaPeopleCarry, FaPlusCircle } from "react-icons/fa";

export const NavItem = ({label,icon,active=false}:{label:string,icon:any, active?:boolean}) => {
  return (
    <Flex my={1} p={3} bg={active?"#333":"none"} mx={2} borderRadius={10}>
      <Flex gap={5} fontSize={"small"} align="center">
        <Icon as={icon} /> <Text>{label}</Text>{" "}
      </Flex>
    </Flex>
  );
};

const Sidebar = () => {
  return (
    <Box pos="relative" px={2} overflowY={"auto"}  minH="100vh">
      <UserAttach />
      {/* <Search /> */}
     <Flex direction={"column"}  justify={"space-between"} h="full">
     <Box my={0}>
        <NavItem label={"Latest"} active icon={FaChartArea} />
        <NavItem label={"Projects"} icon={Box2} />
        <NavItem label={"Search"} icon={SearchFavorite} />
        <NavItem label={"Tags"} icon={Tag2} />
        <NavItem label={"People"} icon={FaPeopleCarry} />
      </Box>

      <Box>
      <NavItem label={"Changelog"} icon={CloudChange} />
      <NavItem label={"Share Feedback"} icon={FaLightbulb} />
      <NavItem label={"Invite People"} icon={FaPlusCircle} />
      <NavItem label={"Logout"} icon={Logout} />
      </Box>
     </Flex>
    </Box>
  );
};

export default Sidebar;
