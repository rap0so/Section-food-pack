import styled from 'styled-components';

const PriceStyled = styled.p(({ theme }) => ({
  '@media(max-width: 640px)': {
    fontSize: '34pt',
  },
  color: theme.colors.priceColor,
  fontSize: '34px',
  fontWeight: 500,
  letterSpacing: '0px',
  margin: '0',
  small: {
    fontSize: '18px',
  },
}));

export default PriceStyled;
