import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 4px solid hsla(0, 0%, 23%, .5); 
  border-top: 4px solid hsla(0, 0%, 92%, .5);
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${rotate} 1.3s ease-in-out infinite;
  transform: scale(${props => props.scale ? props.scale : 1});
`

export default Loader;