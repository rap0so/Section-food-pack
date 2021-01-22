import React, { FC } from 'react';
import { Box } from 'reflexbox';

import NumberSelect from './components/NumberSelect';
import RecipesStyled from './RecipesStyled';
import { TRecipesProps } from './types';

import personIcon from './icons/user.svg';
import kitchenToolsIcon from './icons/kitchen-tools.svg';
import Card from './components/Card/Card';

const Recipes: FC<TRecipesProps> = ({ filterPeople, filterWeek, selected }) => {
  const onFilter = (type: string, id: number) => () =>
    type === 'people' ? filterPeople(id) : filterWeek(id);

  return (
    <RecipesStyled
      alignItems="center"
      flexDirection={['column', 'row']}
      maxHeight={['none', '191px']}
      maxWidth={['none', '638px']}
      mb={['32px', '40px']}
      p={['30px 0', '0']}
    >
      <Card icon={personIcon} title="Receita para quantas pessoas?">
        {Array(2)
          .fill('')
          .map((_, idx) => {
            const valueButton = (idx + 1) * 2;
            const isSelected = selected.people === valueButton;
            const triggerOnFilterRecipes = onFilter('people', valueButton);

            // TODO: fragment it to a cmp
            return (
              <Box key={idx} mr="13px" onClick={triggerOnFilterRecipes}>
                <NumberSelect data-value={valueButton} selected={isSelected}>
                  {valueButton}
                </NumberSelect>
              </Box>
            );
          })}
      </Card>

      <Card icon={kitchenToolsIcon} title="Quantas receitas por semana?">
        {Array(3)
          .fill('')
          .map((_, idx) => {
            const valueButton = idx + 1;
            const isSelected = selected.week === valueButton;
            const triggerOnFilterRecipes = onFilter('week', valueButton);

            // TODO: fragment it to a cmp
            return (
              <Box key={idx} mr="13px" onClick={triggerOnFilterRecipes}>
                <NumberSelect data-value={valueButton} selected={isSelected}>
                  {valueButton}
                </NumberSelect>
              </Box>
            );
          })}
      </Card>
    </RecipesStyled>
  );
};

export default Recipes;
