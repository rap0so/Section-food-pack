import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import NumberSelectWrapperStyled from './NumberSelectWrapperStyled';
import { TNumberSelectProps } from './types';

const WHITE_COLOR = '#fff';

const NumberSelect: FC<TNumberSelectProps> = ({ children, selected }) => {
  const themeContext = useContext(ThemeContext);

  const colorToButton = selected
    ? {
        backgroundColor: themeContext.colors.buttonBackground,
        color: WHITE_COLOR,
      }
    : {
        backgroundColor: WHITE_COLOR,
        color: themeContext.colors.inactiveButtonColor,
      };

  return (
    <NumberSelectWrapperStyled {...colorToButton}>
      {children}
    </NumberSelectWrapperStyled>
  );
};
export default NumberSelect;
