import styled from "styled-components";
import { Filters } from "../../Pages/ProductList/ProductList.types";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export type ProductsProps = {
  filters: Filters;
  category: string;
  sort: string;
}