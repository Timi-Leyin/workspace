import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
} from "@chakra-ui/react";
import { InfoCircle, UserOctagon } from "iconsax-react";
import React from "react";

const AuthInput = ({
  label,
  placeholder,
  type,
  icon,
  value,
  onChange,
  name,
  error,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  icon: any;
  value?: string;
  name?: string;
  error?: string;
  onChange?: any;
}) => {
  return (
    <Box my={4}>
      <FormControl>
        <FormLabel color={error?"red":"#444"} fontSize={13}>{label}</FormLabel>
        <Flex
          p={2}
          borderRadius={10}
          border={`1px solid ${error?"red":"#444"}`}
          align="center"
          gap={3}
        >
          <Icon pl={1} fontSize={20} as={icon} />
          <Input
            border="none"
            value={value}
            onChange={onChange}
            fontSize={14}
            color="#fff"
            type={type}
            name={name}
            placeholder={placeholder}
          />
        </Flex>
        <Flex color={"red"} align={"center"} gap={2} mt={2}>
          {error && (
            <>
              <Icon as={InfoCircle} />
              <Text fontWeight={"bold"} fontSize={12}>
                {error}
              </Text>
            </>
          )}
        </Flex>
      </FormControl>
    </Box>
  );
};

export default AuthInput;
