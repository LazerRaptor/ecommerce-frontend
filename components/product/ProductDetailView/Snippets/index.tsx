import dynamic from "next/dynamic";

const Computer = dynamic(() => import("./Computer"));
const Book = dynamic(() => import("./Book"));

const Specifics = ({ product }) => {
  switch (product.resourcetype) {
    case "Computer":
      return <Computer computer={product} />;
    case "Book":
      return <Book book={product} />;
  }
};

export default Specifics;
