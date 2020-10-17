import { Fragment } from "react";

const Book = ({ book }) => {
  return (
    <Fragment>
      <ul>
        <li>Author: {book.author}</li>
        <li>Length: {book.length}</li>
      </ul>
    </Fragment>
  );
};

export default Book;
