import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const rotateInAnimation = keyframes`${fadeIn}`;
export const RotateStar = styled.p`
  animation: 5s ${rotateInAnimation} ease infinite;
`;
