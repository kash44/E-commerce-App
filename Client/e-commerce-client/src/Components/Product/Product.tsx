import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import * as S from "./Styles";
import { ProductsProps } from "./Styles";

const Product = ({ id, image }: ProductsProps) => {
  return (
    <S.Container>
      <S.Circle />
      <S.Image src={image} />
      <S.Info>
        <S.Icon>
          <ShoppingCartOutlined />
        </S.Icon>
        <S.Icon>
          <SearchOutlined />
        </S.Icon>
        <S.Icon>
          <FavoriteBorderOutlined />
        </S.Icon>
      </S.Info>
    </S.Container>
  );
};

export default Product;
