import styled from 'styled-components';

const PriceTitle = styled.p(({ theme }) => ({
  '@media(max-width: 640px)': {
    fontSize: '16pt',
    textAlign: 'center',
  },
  color: theme.colors.titlePriceColor,
  fontSize: '14px',
  fontWeight: 500,
  letterSpacing: '0px',
  margin: '0',
}));

export default PriceTitle;
