const plugin = require('tailwindcss/plugin')
const maxWidth = 1920 // max layout width in px
const minWidth = 320 // min layout width in px
const adaptive = (pcSize: number) => {
  const mobSize = pcSize * 0.5
  return `calc( ${mobSize} * 1px + (${pcSize} - ${mobSize}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})));`
}
module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    // @ts-ignore
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'w-ad': (pcSize: number) => {
          return {
            width: adaptive(pcSize),
          }
        },
        'h-ad': (pcSize: number) => {
          return {
            height: adaptive(pcSize),
          }
        },
        'max-w-ad': (pcSize: number) => {
          return {
            maxWidth: adaptive(pcSize),
          }
        },
        'max-h-ad': (pcSize: number) => {
          return {
            maxHeight: adaptive(pcSize),
          }
        },
        'min-w-ad': (pcSize: number) => {
          return {
            minWidth: adaptive(pcSize),
          }
        },
        'min-h-ad': (pcSize: number) => {
          return {
            minHeight: adaptive(pcSize),
          }
        },
        'p-ad': (pcSize: number) => {
          return {
            padding: adaptive(pcSize),
          }
        },
        'pr-ad': (pcSize: number) => {
          return {
            'padding-right': adaptive(pcSize),
          }
        },
        'pl-ad': (pcSize: number) => {
          return {
            'padding-left': adaptive(pcSize),
          }
        },
        'pt-ad': (pcSize: number) => {
          return {
            'padding-top': adaptive(pcSize),
          }
        },
        'pb-ad': (pcSize: number) => {
          return {
            'padding-bottom': adaptive(pcSize),
          }
        },
        'py-ad': (pcSize: number) => {
          return {
            'padding-right': adaptive(pcSize),
            'padding-left': adaptive(pcSize),
          }
        },
        'px-ad': (pcSize: number) => {
          return {
            'padding-top': adaptive(pcSize),
            'padding-bottom': adaptive(pcSize),
          }
        },
        'm-ad': (pcSize: number) => {
          return {
            margin: adaptive(pcSize),
          }
        },
        'mr-ad': (pcSize: number) => {
          return {
            'margin-right': adaptive(pcSize),
          }
        },
        'ml-ad': (pcSize: number) => {
          return {
            'margin-left': adaptive(pcSize),
          }
        },
        'mt-ad': (pcSize: number) => {
          return {
            'margin-top': adaptive(pcSize),
          }
        },
        'mb-ad': (pcSize: number) => {
          return {
            'margin-bottom': adaptive(pcSize),
          }
        },
        'my-ad': (pcSize: number) => {
          return {
            'margin-right': adaptive(pcSize),
            'margin-left': adaptive(pcSize),
          }
        },
        'mx-ad': (pcSize: number) => {
          return {
            'margin-top': adaptive(pcSize),
            'margin-bottom': adaptive(pcSize),
          }
        },
        'text-ad': (px: number) => {
          return {
            'font-size': px / 16 + 'rem',
          }
        },
        'leading-ad': (pcSize: number) => {
          return {
            'line-height': adaptive(pcSize),
          }
        },
      })
    }),
  ],
  content: [
    './assets/**/*.{vue,js,scss,css}',
    './pages/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './server/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '320px',
      md: '576px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          0: 'rgba(40,60,100,0.8)',
          1: '#283c64',
        },
        secondary: {
          0: 'rgba(228,238,241,0.8)',
          1: '#e4eef1',
        },
        success: {
          0: 'rgba(49,203,14,0.8)',
          1: '#31cb0e',
        },
        info: {
          0: 'rgba(225,240,13,0.8)',
          1: '#e1f00d',
        },
        warning: {
          0: 'rgba(255,193,7,0.8)',
          1: '#ffc107ff',
        },
        danger: {
          0: 'rgba(220,53,69,0.8)',
          1: '#dc3545ff',
        },
        light: {
          0: 'rgba(242,252,255,0.8)',
          1: '#f2fcff',
        },
        dark: {
          0: 'rgba(33,37,41,0.8)',
          1: '#212529ff',
        },
      },
      gridTemplateColumns: {
        nav: '5.5% 43.5% 51%',
      },
    },
  },
}
