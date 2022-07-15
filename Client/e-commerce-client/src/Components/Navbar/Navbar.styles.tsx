import styled from "styled-components";
import { mobile } from "../../Utils/responsive";

export const Container = styled.div`
  height: 60px;
  /* display: flex; */
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontsize: "24px" })}
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontsize: "12px", marginLeft: "10px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: '1', justifyContent: "center" })}
`;
