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
        <Box sx={{ borderRadius: 20, backgroundColor: 'dark' }} p={20} mb={60}>
          <Flex
            mb={30}
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Heading as="h2" variant="subheadline" sx={{ color: 'white' }}>
              Aktuelle Analyse
            </Heading>
            <Box
              sx={{
                borderRadius: 4,
                backgroundColor: '#F33D49',
                padding: '4px 6px',
                textTransform: 'uppercase',
                color: 'white',
                fontSize: '12px',
                lineHeight: 1,
                fontWeight: 'bold'
              }}
            >
              Live
            </Box>
          </Flex>
          <Link
            mb="12px"
            px={18}
            target="_blank"
            rel="noopener"
            href="https://weingut-bayern.de"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: 8,
              height: 51,
              lineHeight: '51px',
              color: 'white',
              fontSize: 1,
              fontWeight: 'medium',
              display: 'block',
              textDecoration: 'none',
              position: 'relative'
            }}
          >
            <Box as="span">https://weingut-bayern.de</Box>
            <Flex
              sx={{
                position: 'absolute',
                right: 18,
                top: '0',
                display: 'block',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <Image src="/openlink.svg" quality={100} width={16} height={16} />
            </Flex>
          </Link>
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
            href="https://menius946645.typeform.com/to/G9ZxqKdP"
          >
            Website bewerten
          </Link>
        </Box>
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
