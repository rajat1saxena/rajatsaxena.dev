import { AspectRatio, Box, chakra, Flex, Heading, HStack, Link, List, ListItem, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import LinkBox from '../components/LinkBox'

export default function Home() {
  return (
    <Layout>
      <VStack align="start" spacing={4} mb={16}>
        <Heading>Hi, I'm Rajat</Heading>
        <Text>I am a developer, creator and entrepreneur.
            During the normal business hours, I work at <Link href="https://www.oncehub.com">
            Oncehub
          </Link> as a Software Engineer.
        </Text>
        <Text>Apart from my job, I also run a programming community <Link href="https://codelit.dev">
            <chakra.span
              fontWeight="bold"
              textDecoration="underline">
              CodeLit
            </chakra.span>
          </Link> and a newsletter reading app <Link>
            <chakra.span
              fontWeight="bold"
              textDecoration="underline">
              Recurze
            </chakra.span>
          </Link>.
        </Text>
        <Text>I have launched several web and app related businesses since the beginning of my entrepreneurial career.
          Over the years, I have amassed a lot of experience in building tech products as a solo founder.
        </Text>
        <Text>
          <chakra.span fontWeight="bold">This site contains resources for other solo founders</chakra.span> like me.
          I post about tools, learning material, podcasts and other stuff that help
          me in running my business efficiently as a solopreneur.
        </Text>
        <Text>If you want to get in touch, come hang out with me on <Link href="https://discord.gg/5EkztqK">
          <chakra.span
            fontWeight="bold"
            textDecoration="underline">
            Discord
          </chakra.span>
        </Link>.</Text>
      </VStack>

      <VStack align="start" spacing={4} mb={16}>
        <Heading size="lg">Resources For Solopreneurs</Heading>
        <Text>
          I have gathered various resources from all over the web and put those into some easy to browse lists.
          Click any of the following links to see the resources.
        </Text>
        <Wrap>
          <WrapItem>
            <LinkBox title="Free hosting" href="/free-hosting" />
          </WrapItem>
          <WrapItem>
            <LinkBox title="Design" href="/design" />
          </WrapItem>
          <WrapItem>
            <LinkBox title="Marketing" href="/marketing" />
          </WrapItem>
          <WrapItem>
            <LinkBox title="Legal" href="/legal" />
          </WrapItem>
        </Wrap>
      </VStack>

      <VStack align="start" spacing={4}>
        <Heading size="lg">Need more?</Heading>
        <Text>
          For serious folks, I offer a paid newsletter where I share
          my own learnings about developing, deploying and marketing tech products.
        </Text>
        <Text>
          I also include curated content like podcasts, Hackernews/Reddit posts and others which I find particularly useful as a solopreneur.
        </Text>
        <Text>Highly recommended for solo founders building serious products. Please sign up below.</Text>
      </VStack>
      <AspectRatio>
            <iframe
              src="https://solopreneur.substack.com/embed"
              width="100%"
              height="120"
              scrolling="no"></iframe>
      </AspectRatio>
    </Layout>
  )
}
