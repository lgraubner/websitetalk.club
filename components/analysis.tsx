import { Box, Flex, Heading, Link } from 'theme-ui'
import Image from 'next/image'

type AnalysisProps = {
  link: string
}

function Analysis({ link }: AnalysisProps) {
  return (
    <Box sx={{ borderRadius: 20, backgroundColor: 'dark' }} p={20} mb={60}>
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
