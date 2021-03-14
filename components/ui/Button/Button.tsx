import styled from "styled-components";

const Button = styled.button`
  background: #000;
  color: #fff;
  font-weight: 600;
  font-size: ${props => props.isSmall ? ".9em" : "1.1em"};
  width: ${(props) => (props.isFullWidth ? "100%" : "initial")};
  border-radius: ${(props) => (props.isRound ? "32px" : "4px")};
  border: 0;
  outline: 0;
  padding: 0.5em 1em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    cursor: not-allowed;
    opacity: .6;
    pointer-events: none;
  }
`;

export default Button;
