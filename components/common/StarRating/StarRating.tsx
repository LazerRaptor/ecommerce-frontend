import { MdStarBorder, MdStar, MdStarHalf } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const Votes = styled.span`
  font-size: 0.725em;
  margin-left: 0.5em;
  opacity: 0.5;
`;

const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 0.5em 0;
  font-size: ${(props) => props.size}px;
`;

type IProps = {
  grade: string | number;
  votes: string | number;
  size: 18 | 24 | 36 | 48;
};

const StarRating = ({ grade, votes, size = 18 }: IProps) => {
  grade = Number(grade);
  const gradeFloor = Math.floor(grade);
  const gradeDecimal = grade - gradeFloor;
  const halfStar = () => {
    if (gradeDecimal < 0.25) {
      return <MdStarBorder />;
    } else if (0.25 < gradeDecimal && gradeDecimal < 0.75) {
      return <MdStarHalf />;
    } else {
      return <MdStar />;
    }
  };
  return (
    <Rating size={size}>
      {[...Array(gradeFloor)].map(() => (
        <MdStar key={uuidv4()} />
      ))}
      {halfStar()}
      {[...Array(4 - gradeFloor)].map(() => (
        <MdStarBorder key={uuidv4()} />
      ))}
      <Votes>{votes} reviews</Votes>
    </Rating>
  );
};

StarRating.defaultProps = {
  size: "1rem",
};

export default StarRating;
