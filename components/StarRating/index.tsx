import { MdStarBorder, MdStar, MdStarHalf } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.scss";

type IProps = {
  grade: string | number;
  votes: string | number;
  size: string;
};

const StarRating = ({ grade, votes, size }: IProps) => {
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
    <div className={styles.rating} style={{ fontSize: size }}>
      {[...Array(gradeFloor)].map(() => (
        <MdStar key={uuidv4()} />
      ))}
      {halfStar()}
      {[...Array(4 - gradeFloor)].map(() => (
        <MdStarBorder key={uuidv4()} />
      ))}
      <span className={styles.votes}>{votes} reviews</span>
    </div>
  );
};

StarRating.defaultProps = {
  size: "1rem",
};

export default StarRating;
