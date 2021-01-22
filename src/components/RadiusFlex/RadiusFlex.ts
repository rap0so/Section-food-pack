import styled from 'styled-components';
import { Flex } from 'reflexbox';
import { borderRadius, BorderRadiusProps, compose } from 'styled-system';

// TODO: type props from theme
const RadiusFlex = styled(Flex)<BorderRadiusProps>(compose(borderRadius));

export default RadiusFlex;
