import styled from "styled-components";
import Gallery from "../../common/Gallery";
import Description from "./Description";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const DetailView = ({ product }) => {
  return (
    <Container>
      <Gallery images={product.images} />
      <Description product={product} />
    </Container>
  );
};

export default DetailView;
