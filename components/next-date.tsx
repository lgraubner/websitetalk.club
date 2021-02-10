import { Box, Heading, Link, Text } from 'theme-ui'

function NextDate() {
  return (
    <>
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
    </>
  )
}

export default NextDate
