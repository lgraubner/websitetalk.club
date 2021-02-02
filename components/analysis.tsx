import { Box, Flex, Heading, Link } from 'theme-ui'
import Image from 'next/image'

type AnalysisProps = {
  link: string
}

function Analysis({ link }: AnalysisProps) {
  return (
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
        href={link}
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
        <Box as="span">{link}</Box>
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
  )
}

export default Analysis
