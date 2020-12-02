import { Flex, HStack, Text } from "@chakra-ui/react";

export default function Footer({}) {
    return (
        <Flex justify="center">
            <Text
                fontSize="sm"
                color="gray.500">
                Copyright © 2020 Rajat Saxena.
            </Text>
        </Flex>
    )
}