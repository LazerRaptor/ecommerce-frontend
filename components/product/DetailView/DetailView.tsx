import styled from "styled-components";
import Gallery from "../../common/Gallery";
import ProductItem from "./ProductItem";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DetailView = ({ product }) => {
  return (
    <Container>
      <Gallery images={product.images} />
      <ProductItem product={product} />
    </Container>
  );
};

export default DetailView;
