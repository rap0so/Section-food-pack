import styled from 'styled-components';

// TODO: type props from theme
const titleStyle = {
  '@media(max-width: 640px)': {
    fontSize: '24pt',
    lineHeight: '36px',
  },
  b: {
    fontWeight: 700,
  },
  color: '#000000',
  fontSize: '25px',
  fontWeight: 400,
  letterSpacing: '0px',
  opacity: 1,
  textAlign: 'center',
} as any;

const Title = styled.h2(titleStyle);

const MainTitle = styled.h1({
  ...titleStyle,
  '@media(max-width: 640px)': {
    '&&': {
      b: {
        fontWeight: 500,
      },
      fontSize: '30pt',
    },
  },
});

export { MainTitle };

export default Title;
