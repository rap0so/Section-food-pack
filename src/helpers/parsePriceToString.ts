import toFixedNoRounding from './toFixedNoRounding';

const parsePriceToString = (price: number) =>
  toFixedNoRounding(price, 2).replace('.', ',');

export default parsePriceToString;
