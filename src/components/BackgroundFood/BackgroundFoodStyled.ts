import { Box } from 'reflexbox';
import styled from 'styled-components';
import backgroundImg from './bg.jpg';

const BackgroundFoodStyled = styled(Box)({
  '@media(max-width: 640px)': {
    borderRadius: '10px 10px 0px 0px',
    height: '267px',
    width: '100%',
  },
  backgroundImage: `url(${backgroundImg})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  borderRadius: '10px 0px 0px 10px',
  height: '450px',
  overflow: 'hidden',
  width: '462px',
});

export default BackgroundFoodStyled;
