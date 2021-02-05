const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    preflight: true
  },
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: ['./src/**/*.ts', './src/**/*.tsx'],
    options: {
      defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
    }
  },
  theme: {
    extend: {
      colors: {
        blue: {
          25: '#BAE6FD',
          75: '#90CDF4',
          70: '#A7DDFF'
        },
        yellow: {
          25: '#FED7AA'
        },
        purple: {
          250: '#BBADD9',
          450: '#BAA9FF'
        },
        red: {
          250: '#FFA0A0'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            img: {
              marginRight: 'auto',
              marginLeft: 'auto'
            }
          }
        }
      },
      backgroundImage: () => ({
        'ticket-long': "url('/assets/ticket-bg-long.png')",
        'ticket-sq': "url('/assets/ticket-bg-sq.png')",
        'ticket-show-bg': "url('/assets/ticket-show-bg.jpg')"
      })
    },
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      display: [
        'Inter var',
        'SF Pro Display',
        'Sukhumvit Set',
        'IBM Plex Sans Thai',
        ...defaultTheme.fontFamily.sans
      ]
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/assets/fonts/Inter-roman.var.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/assets/fonts/Inter-italic.var.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '400',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai"), local("IBMPlexSansThai"), url("/assets/fonts/IBMPlexSansThai-Regular.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '450',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai Text"), local("IBMPlexSansThai-Text"), url("/assets/fonts/IBMPlexSansThai-Text.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '500',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai Medium"), local("IBMPlexSansThai-Medium"), url("/assets/fonts/IBMPlexSansThai-Medium.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '600',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai SemiBold"), local("IBMPlexSansThai-SemiBold"), url("/assets/fonts/IBMPlexSansThai-SemiBold.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '700',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai Bold"), local("IBMPlexSansThai-Bold"), url("/assets/fonts/IBMPlexSansThai-Bold.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '100',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai Thin"), local("IBMPlexSansThai-Thin"), url("/assets/fonts/IBMPlexSansThai-Thin.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '200',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai ExtraLight"), local("IBMPlexSansThai-ExtraLight"), url("/assets/fonts/IBMPlexSansThai-ExtraLight.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'IBM Plex Sans Thai',
            fontStyle: 'normal',
            fontWeight: '300',
            fontDisplay: 'swap',
            src:
              'local("IBM Plex Sans Thai Light"), local("IBMPlexSansThai-Light"), url("/assets/fonts/IBMPlexSansThai-Light.woff2") format("woff2")'
          }
        },
        {
          '@font-face': {
            fontFamily: 'Sukhumvit Set',
            fontDisplay: 'swap',
            src: "local('Sukhumvit Set')",
            unicodeRange: 'U+0E01-0E5B, U+200C-200D, U+25CC'
          }
        }
      ])
    }
  ]
}
