import { Flex } from 'reflexbox';
import styled from 'styled-components';

const RecipesStyled = styled(Flex)(({ theme }) => ({
  background: theme.colors.recipesBackground,
  borderRadius: theme.borderRadius,
  height: '100%',
  justifyContent: 'center',
  width: '100%',
}));

export default RecipesStyled;
