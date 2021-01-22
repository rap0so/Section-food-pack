import React, { FC } from 'react';
import { TCardProps } from './types';
import { Flex } from 'reflexbox';

import TitleSelect from '../TitleSelect';

const Card: FC<TCardProps> = ({ children, icon, title }) => {
  return (
    <Flex flex="0.5" flexDirection="column" mb={['35px', '0']}>
      <Flex justifyContent="center" mb="30px">
        <Flex alignItems="center" mr="18px">
          <img alt="person" src={icon} />
        </Flex>

        <TitleSelect>{title}</TitleSelect>
      </Flex>

      <Flex justifyContent="center">{children}</Flex>
    </Flex>
  );
};

export default Card;
