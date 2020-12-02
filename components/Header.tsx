import { Avatar, Flex, HStack, Link, Spacer, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function Header({}) {
    return (
        <Flex alignItems="center">
            <Head>
                <title>Rajat Saxena - Resources For Solo Founders</title>
                <link rel="icon" href="/rajat.webp" />
            </Head>

            <Link href="/">
                <Avatar
                    name="Rajat Saxena"
                    src="/rajat.webp"
                    size="md"/>
            </Link>
            <Spacer />
            <Link href="https://solopreneur.substack.com/">Newsletter</Link>
        </Flex>
    )
}