import styled from "styled-components";
import { mobile } from "../../Utils/responsive";

export type TypeProps = {
  type?: "total" | "filled";
};

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20;
  ${mobile({ padding: "10px" })}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const TopButton = styled.div<TypeProps>`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${({ type }) => (type === "filled" ? "none" : "1px solid lightgray")};
  background-color: ${({ type }) =>
    type === "filled" ? "black" : "1px solid lightgray"};
  color: ${({ type }) => type === "filled" && "white"};
`;

export const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;

export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({ flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 3;
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const ProductSize = styled.div``;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

export const ProductPrice = styled.div`
  display: flex;
  font-size: 30px;
  font-weight: 200;
  align-items: center;
  justify-content: center;
  ${mobile({ marginBottom: "20px" })}
`;

export const Hr = styled.hr`
  background-color: #eeee;
  border: none;
  height: 1px;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div<TypeProps>`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${({ type }) => type === "total" && "500"};
  font-size: ${({ type }) => type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;
export const SummaryItemPrice = styled.span``;

export const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;
