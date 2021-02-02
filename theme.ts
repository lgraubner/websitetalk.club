const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 20, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Poppins',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 15, 18, 22, 24, 30, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 800,
    semibold: 600,
    bold: 700,
    medium: 500
  },
  lineHeights: {
    body: 1.5,
    heading: 1.2,
    subheadline: 1.15,
    club: 1.333
  },
  colors: {
    text: '#000',
    dark: '#08111B',
    background: '#fff',
    white: 'white',
    muted: 'rgba(0, 0, 0, 0.5)'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
      textAlign: 'center'
    },
    subheadline: {
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: 2,
      lineHeight: 'subheadline'
    },
    club: {
      fontFamily: 'heading',
      lineHeight: 'club',
      fontWeight: 'heading',
      fontSize: 4,
      textAlign: 'left'
    },
    muted: {
      color: 'muted',
      fontSize: 1,
      lineHeight: 1,
      fontWeight: 'medium'
    }
  },
  sizes: {
    container: 390
  },
  buttons: {
    primary: {
      borderRadius: 8,
      paddingY: '18px',
      fontSize: 1,
      lineHeight: 1,
      fontWeight: 'medium',
      color: 'white',
      background: 'linear-gradient(45deg, #E92F85 0%, #FE4D00 100%)',
      '&:active': {
        transform: 'translate3d(0, 1px, 0)'
      }
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    }
  }
}

export default theme
