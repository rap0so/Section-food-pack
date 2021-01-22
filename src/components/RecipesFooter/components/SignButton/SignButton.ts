import styled from 'styled-components';

const SignButton = styled.button(({ theme }) => ({
  '&:hover': {
    boxShadow: theme.boxShadow,
    transform: 'scale(1.02)',
  },
  '@media(max-width: 640px)': {
    fontSize: '16pt',
  },
  backgroundColor: theme.colors.buttonBackground,
  border: '0',
  borderRadius: '50px',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 600,
  margin: '0',
  padding: '15px 0',
  width: '100%',
}));

export default SignButton;
