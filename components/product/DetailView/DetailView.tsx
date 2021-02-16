import styled from "styled-components";
import Gallery from "../../common/Gallery";

const Container = styled.div`
  display: flex;
`;

const DetailView = ({ product }) => {
  return <Gallery images={product.images} />;
};

export default DetailView;
