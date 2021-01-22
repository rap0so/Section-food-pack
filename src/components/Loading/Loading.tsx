import React, { FC } from 'react';
import { BarLoader } from 'react-spinners';

import LoadingWrapperStyled from './LoadingWrapperStyled';
import { TLoadingProps } from './types';
import { Box } from 'reflexbox';

const Loading: FC<TLoadingProps> = ({ full }) =>
  full ? (
    <LoadingWrapperStyled
      alignItems="center"
      data-testid="full"
      display="flex"
      justifyContent="center"
      height="100%"
    >
      <BarLoader color="#3BB300" />
    </LoadingWrapperStyled>
  ) : (
    <Box data-testid="bar">
      <BarLoader />
    </Box>
  );

export default Loading;
