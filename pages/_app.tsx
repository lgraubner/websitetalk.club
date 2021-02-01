import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import { Global, css } from '@emotion/core'

import theme from '../theme'

import '../css/fonts.css'
import '../node_modules/ress/dist/ress.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          websitetalk - Wir analysieren Deine Website (Design, UX, Code)
        </title>
      </Head>
      <Global
        styles={css`
          body {
            font-family: ${theme.fonts.body};
            color: ${theme.colors.text};
          }
          * {
            flex-shrink: 0;
            flex-grow: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            outline: none;
          }
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
