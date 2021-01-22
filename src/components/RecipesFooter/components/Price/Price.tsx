import React, { FC } from 'react';
import PriceStyled from './PriceStyled';

const Price: FC = ({ children }) => (
  <PriceStyled>
    <small>R$</small> {children}
  </PriceStyled>
);

export default Price;
