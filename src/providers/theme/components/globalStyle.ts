import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle({
  '#root': {
    height: '100%',
  },
  '*': {
    '&:focus': {
      outline: 0,
    },
    transition: 'all .3s ease',
  },
  body: {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '#F5F8FA',
    fontFamily:
      'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    margin: '0',
    minHeight: '100vh',
  },
  img: {
    display: 'block',
    height: '35px',
    width: 'auto',
  },
});

export default globalStyle;
