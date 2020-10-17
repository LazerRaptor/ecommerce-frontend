import { Fragment } from "react";

const Computer = ({ computer }) => {
  return (
    <Fragment>
      <ul>
        <li>CPU: {computer.cpu}</li>
        <li>GPU: {computer.gpu}</li>
        <li>HDD: {computer.hdd}</li>
      </ul>
    </Fragment>
  );
};

export default Computer;
