import { Flex, HStack, Text } from "@chakra-ui/react";

export default function Footer({}) {
    return (
        <Flex justify="center">
            <Text
                fontSize="sm"
                color="gray.400">
                Copyright (c) 2020.
            </Text>
        </Flex>
    )
}