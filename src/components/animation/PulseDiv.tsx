import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

const pulseAnimation = keyframes`${pulse}`;
export const PulseDiv = styled.div`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;
