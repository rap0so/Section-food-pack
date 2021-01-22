import { TGetNextValueProps } from 'providers/getNextValue/types';

export type TbuildFromOneToThreeProps = Omit<
  TGetNextValueProps,
  'nextWeeklyRecipes'
>;
