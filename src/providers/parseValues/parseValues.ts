// TODO: type it properly

import getNextValue from 'providers/getNextValue';
import { TbuildFromOneToThreeProps } from './types';

const parseValues = (receivedData: any) =>
  receivedData?.listPlans?.reduce((acc: any, data: any) => {
    const { numberOfPeople, price, weeklyRecipes } = data;

    const newValues = buildFromOneToThree({
      numberOfPeople,
      price,
      weeklyRecipes,
    });

    return acc.concat(...newValues);
  }, []);

const buildFromOneToThree = ({
  numberOfPeople,
  price,
  weeklyRecipes,
}: TbuildFromOneToThreeProps) => {
  return Array(3)
    .fill('')
    .map((_, idx) => {
      const next = idx + 1;

      const newPrice = getNextValue({
        numberOfPeople,
        price,
        weeklyRecipes,
        nextWeeklyRecipes: next,
      });

      return {
        numberOfPeople,
        price: newPrice,
        weeklyRecipes: next,
      };
    });
};

export default parseValues;
