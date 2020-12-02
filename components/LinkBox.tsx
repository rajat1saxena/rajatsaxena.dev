import { Box, Link, Text } from "@chakra-ui/react";

export default function LinkBox({ title, href, bg = "gray.400" }) {
    return (
        <Link href={href}>
            <Box
                flex={1}
                bg={bg || "white"}
                px={2}
                py={8}
                borderRadius="md"
                color="white"
                _hover={{ bg: "gray.500" }}
                w="11rem"
                textAlign="center"
                mb={4}>
                <Text
                    fontSize="xl">{title}</Text>
            </Box>
        </Link>
    )
}