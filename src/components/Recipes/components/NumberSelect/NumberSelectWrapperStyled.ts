import styled from 'styled-components';

// TODO: type theme
const NumberSelectStyled = styled.button((props: any) => ({
  '&:hover': {
    boxShadow: props.theme.boxShadow,
    transform: 'scale(1.04)',
  },
  alignItems: 'center',
  backgroundColor: 'inherit',
  border: '0',
  borderRadius: props.theme.borderRadius,
  color: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '28px',
  fontWeight: 700,
  height: '61px',
  justifyContent: 'center',
  width: '61px',
  ...props,
}));

export default NumberSelectStyled;
