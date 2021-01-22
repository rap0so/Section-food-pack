import React, { FC, useEffect, useState } from 'react';
import { Box, Flex } from 'reflexbox';

import isMobile from 'helpers/isMobile';
import parsePriceToString from 'helpers/parsePriceToString';

import Price from './components/Price';
import PriceTitle from './components/PriceTitle';
import SignButton from './components/SignButton';
import { TRecipesFooterProps } from './types';

const testScreen = () =>
  isMobile() ? 'Assinar agora!' : 'Quero assinar agora!';

const RecipesFooter: FC<TRecipesFooterProps> = ({ price }) => {
  const stringfiedPrice = parsePriceToString(price);
  const [textToButton, setTextToButton] = useState(testScreen());

  useEffect(() => {
    window!.addEventListener('resize load', () =>
      setTextToButton(testScreen()),
    );
  }, []);

  return (
    <Flex flexDirection={['column', 'row']}>
      <Flex
        alignItems="center"
        flexDirection="column"
        justifyContent="flex-end"
        // maxWidth={['220px', 'none']}
        mr={['0', '86px']}
      >
        <PriceTitle>PREÇO DO KIT POR SEMANA</PriceTitle>
        <Box mt="10px">
          <Price>{stringfiedPrice}</Price>
        </Box>
      </Flex>

      <Flex
        alignSelf="flex-end"
        flex="1"
        mt={['24px', '0']}
        width={['100%', 'auto']}
      >
        <SignButton>{textToButton}</SignButton>
      </Flex>
    </Flex>
  );
};

export default RecipesFooter;
