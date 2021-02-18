import styled from "styled-components";

type Props = {
  title: string,
  size: number | string,
  background?: string,
  color?: string,
  bold?: boolean,
  type?: string,
  radius?: string,
}

const Btn = styled.button`
  background: ${props => props.background};
  color: ${props => props.color};
  font-weight: ${props => props.bold ? 600 : 400};
  font-size: ${props => props.size}px;
  border-radius: ${props => props.radius};
  border: 0;
  padding: .75em 1em;
  cursor: pointer;
`;

const Button = ({ 
  title, 
  size, 
  background = "#000", 
  color = "#fff", 
  bold = true,
  type = "",
  radius = "4px"
} : Props ) => (
  <Btn
    size={size}
    background={background}
    color={color}
    bold={bold}
    type={type}
    radius={radius}
  >
    {title}
  </Btn>
)

export default Button;