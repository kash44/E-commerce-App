import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import * as S from "./Styles";
import { ProductProps } from "./Styles";
import { Link } from "react-router-dom";

const Product = ({ product }: ProductProps) => {
  console.log('next id', product._id)
  return (
    <S.Container>
      <S.Circle />
      <S.Image src={product.image} />
      <S.Info>
        <S.Icon>
          <ShoppingCartOutlined />
        </S.Icon>
        <S.Icon>
          <Link to={`/product/${product._id}`}>
          <SearchOutlined />
          </Link>
        </S.Icon>
        <S.Icon>
          <FavoriteBorderOutlined />
        </S.Icon>
      </S.Info>
    </S.Container>
  );
};

export default Product;
