import { Box, Flex } from "@chakra-ui/react";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <Box
            maxW="40rem"
            margin="auto"
            p={4}>
            <Header />

            <Box w="100%" mt="2rem" minH="80vh">
                {children}
            </Box>

            <Footer />
        </Box>
    )
}