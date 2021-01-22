import { gql } from 'apollo-boost';

export const LIST_PLANS_QUERY = gql`
  {
    listPlans: allPlans {
      id
      weeklyRecipes
      numberOfPeople
      price
    }
  }
`;
