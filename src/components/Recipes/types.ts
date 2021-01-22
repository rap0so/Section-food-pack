export type TRecipesProps = {
  filterPeople: React.Dispatch<React.SetStateAction<number>>;
  filterWeek: React.Dispatch<React.SetStateAction<number>>;
  selected: {
    people: number;
    week: number;
  };
};
