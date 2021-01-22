import { TGetNextValueProps } from './types';

const getNextValue = ({
  nextWeeklyRecipes,
  numberOfPeople,
  price,
  weeklyRecipes,
}: TGetNextValueProps) => {
  const multiplier = numberOfPeople * 10;
  const weeklyRecipesLessOne = weeklyRecipes - 1 || 1;
  const basePrice = parseFloat(price) - multiplier * weeklyRecipesLessOne;

  return basePrice + (nextWeeklyRecipes - 1) * numberOfPeople * 10;
};

export default getNextValue;
