import dynamic from "next/dynamic";

const Computer = dynamic(() => import("../Specifics/Computer"));
const Book = dynamic(() => import("../Specifics/Book"));

const Specifics = ({ product }) => {
  switch (product.resourcetype) {
    case "Computer":
      return <Computer computer={product} />;
    case "Book":
      return <Book book={product} />;
  }
};

export default Specifics;
