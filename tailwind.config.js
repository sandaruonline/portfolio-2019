module.exports = {
  theme: {
    fontFamily: {
      'sans': 'Ubuntu, sans-serif',
      'monospace': 'Fira Code, monospace'
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2.125rem',
      '4xl': '2.5rem',
      '5xl': '3.5rem',
      '6xl': '5rem',
      '7xl': '10rem',
      '8xl': '15rem',
      '9xl': '20rem',
    },
    flex: {
      none: 'none',
      inherit: 'inherit',
      initial: '0 1 auto',
      auto: '1 1 auto',
      '1': '1 0 auto',
      '2': '2 0 auto',
      full: '100 0 auto',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/3': '33.33%',
      '1/2': '50%',
      '2/3': '66.67%',
      '3/4': '75%',
      '50': '50px',
      full: '100%',
    },
    extend: {
      lineHeight: {
        squish: 0.85,
      },
      minHeight: {
        '180': '180px',
        '240': '240px',
        '300': '300px',
        '380': '380px',
        '420': '420px',
        '480': '480px',
        '640': '640px',
        '1024': '1024px',
      },
      borderRadius: {
        xl: '32px',
      },
      borderWidth: {
        '12': '12px',
        '16': '16px',
      },
      transitionProperty: {
        inputs:
          'background-color, color, border, border-color, fill, stroke, opacity, box-shadow',
        size: 'width, min-width, max-width, height, min-height, max-height',
        flex: 'flex',
        fade: 'margin, opacity',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(.21, 0, .45, 1)',
      },
    },
  },
  variants: {
    flex: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    minWidth: ['responsive', 'hover'],
    margin: ['responsive', 'hover'],
  },
  plugins: [],
}
