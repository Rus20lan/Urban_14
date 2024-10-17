import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
// import labelAtb from '../../images/atb-animation.png';

const pulseAnimation = keyframes`${pulse}`;
export const PulseDiv = styled.div`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
`;

// const PulseLabel = () => {
//   const PulseDiv = styled.div`
//     animation-name: ${pulseAnimation};
//     animation-duration: 1s;
//   `;
//   return (
//     <PulseDiv>
//       <img src={labelAtb}></img>
//     </PulseDiv>
//   );
// };

// export default PulseLabel;

// animation: 1s ${pulseAnimation};
// animation-name: ${pulseAnimation};
// animation-timing-function: ease-in-out;
// animation-duration: 1s;
