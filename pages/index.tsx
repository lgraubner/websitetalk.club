import Image from 'next/image'
import { Box, Flex, Heading, Container, Text, Link } from 'theme-ui'
import Analysis from '../components/analysis'

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
        <Image
          src="/logo.svg"
          alt="websitetalk"
          width={155}
          height={28}
          quality={100}
          priority
        />
      </Flex>
      <Container as="main" mb={60} px={3}>
        <Heading as="h1" pt={50} pb={55}>
          Wir analysieren gemeinsam Deine Website
        </Heading>
        <Flex sx={{ alignItems: 'center', justifyContent: 'center' }} mb={80}>
          <Box mx={2} sx={{ position: 'relative' }}>
            <Image
              src="/dan@2x.png"
              alt="Daniel Menius"
              width={109}
              height={109}
              quality={100}
            />
            <Link
              href="https://www.linkedin.com/in/danielmenius/"
              rel="noopener"
              sx={{
                color: 'black',
                position: 'absolute',
                bottom: -10,
                left: -66,
                textDecoration: 'none'
              }}
              target="_blank"
            >
              <Flex
                sx={{
                  padding: '10px 28px 10px 10px',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  boxShadow: '0 11px 13px 0 rgba(0,0,0,0.22)'
                }}
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  quality={100}
                />
                <Text ml="8px" sx={{ fontSize: 1, fontWeight: 'semibold' }}>
                  Daniel
                </Text>
              </Flex>
            </Link>
          </Box>
          <Box mx={2} sx={{ position: 'relative' }}>
            <Image
              src="/lars@2x.png"
              alt="Lars Graubner"
              width={109}
              height={109}
              quality={100}
            />
            <Link
              href="https://www.linkedin.com/in/larsgraubner/"
              rel="noopener"
              sx={{
                color: 'black',
                position: 'absolute',
                top: -25,
                right: -64,
                textDecoration: 'none'
              }}
              target="_blank"
            >
              <Flex
                sx={{
                  padding: '10px 28px 10px 10px',
                  borderRadius: 8,
                  backgroundColor: 'white',
                  boxShadow: '0 11px 13px 0 rgba(0,0,0,0.22)'
                }}
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  quality={100}
                />
                <Text ml="8px" sx={{ fontSize: 1, fontWeight: 'semibold' }}>
                  Lars
                </Text>
              </Flex>
            </Link>
          </Box>
        </Flex>

        <Analysis link="https://www.my-sportswear.de/" />

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
