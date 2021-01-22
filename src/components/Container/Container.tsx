import React, { FC } from 'react';
import { BoxProps } from 'reflexbox';

import ContainerStyled from './ContainerStyled';

const Container: FC<BoxProps> = (props) => (
  <ContainerStyled
    m="auto"
    maxWidth="1250px"
    p="25px"
    {...props}
    data-testid="container"
  >
    {props.children}
  </ContainerStyled>
);

export default Container;
