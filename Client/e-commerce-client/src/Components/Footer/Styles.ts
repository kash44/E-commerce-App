import styled from "styled-components";
import { mobile } from "../../Utils/responsive";

type SocialIconProps = {
  color: string;
};

export const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div<SocialIconProps>`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  // remove default margin and padding from ul
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

export const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

export const Payment = styled.img`
  width: 50%;
`;
