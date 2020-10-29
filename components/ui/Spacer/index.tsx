const Spacer = ({ x, y, children }) => {
  const style = {
    margin: `${y}rem ${x}rem`,
  };
  return <div style={style}>{children}</div>;
};

Spacer.defaultProps = {
  x: 0,
  y: 0,
  children: null,
};

export default Spacer;
