import Image from 'next/image'
import { Box, Flex, Heading, Container, Text, Link } from 'theme-ui'

function Home() {
  return (
    <Box>
      <Flex
        as="header"
        sx={{
          height: 62,
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image src="/logo.svg" alt="websitetalk" width={155} height={28} />
      </Flex>
      <Container as="main" mb={60} px={3}>
        <Heading as="h1" pt={50} pb={55}>
          Wir analysieren gemeinsam Deine Website
        </Heading>
        <Flex sx={{ alignItems: 'center', justifyContent: 'center' }} mb={80}>
          <Box mx={2} pt={10}>
            <Image
              src="/dan@2x.png"
              alt="Daniel Menius"
              width={100}
              height={110}
            />
          </Box>
          <Box mx={2}>
            <Image
              src="/lars@2x.png"
              alt="Lars Graubner"
              width={100}
              height={100}
            />
          </Box>
        </Flex>
        <Heading as="h2" variant="subheadline" mb={24}>
          Nächster Termin
        </Heading>
        <Box
          p={20}
          sx={{
            borderRadius: 20,
            backgroundColor: '#E6EBF0'
          }}
        >
          <Heading as="h3" variant="club" mb={24}>
            #3 Wir analysieren Deine Website (Design, UX, Code)
          </Heading>
          <Text variant="muted" mb={2}>
            Datum
          </Text>
          <Text sx={{ fontSize: 3, lineHeight: 1 }} mb={24}>
            03. Februar 2021
          </Text>
          <Text variant="muted" mb={2}>
            Start
          </Text>
          <Text sx={{ fontSize: 3, lineHeight: 1 }} mb={24}>
            19 Uhr
          </Text>
          <Link
            sx={{
              width: '100%',
              variant: 'buttons.primary',
              display: 'block',
              textAlign: 'center',
              textDecoration: 'none'
            }}
            target="_blank"
            rel="noopener"
            href="https://www.joinclubhouse.com/event/M1za48e2"
          >
            Zum Termin
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
