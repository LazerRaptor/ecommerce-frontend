import styled from "styled-components";
import { ListItem } from "./ListItem";

const GridContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, 14rem);
  grid-template-rows: repeat(auto-fill, 20rem);
  justify-content: center;
  padding: 2rem 0;
`;

const ListView = ({ items }) => {
  return (
    <GridContainer>
      {items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </GridContainer>
  );
};

export default ListView;
