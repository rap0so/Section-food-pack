import styled from 'styled-components';

const TitleSelect = styled.h3(({ theme }) => ({
  '@media(max-width: 640px)': {
    fontSize: '16pt',
    maxWidth: '200px',
  },
  borderRadius: theme.borderRadius,
  color: theme.colors.recipeSelectTitleColor,
  fontSize: '16px',
  fontWeight: 500,
  margin: '0',
  maxWidth: '150px',
}));

export default TitleSelect;
