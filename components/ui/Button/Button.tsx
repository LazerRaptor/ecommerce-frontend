import styled from "styled-components";

type Props = {
  title: string;
  size: number | string;
  background?: string;
  color?: string;
  bold?: boolean;
  type?: string;
  radius?: string;
  onClick?: (e?: React.SyntheticEvent) => void;
};

const Btn = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  font-size: ${(props) => props.size}px;
  border-radius: ${(props) => props.radius};
  border: 0;
  outline: 0;
  padding: 0.75em 1em;
  cursor: pointer;
`;

function Button({
  title,
  size,
  background = "#000",
  color = "#fff",
  bold = true,
  type = "",
  radius = "4px",
  ...rest
}: Props) {
  return (
    <Btn
      size={size}
      background={background}
      color={color}
      bold={bold}
      type={type}
      radius={radius}
      {...rest}
    >
      {title}
    </Btn>
  );
}

export default Button;
