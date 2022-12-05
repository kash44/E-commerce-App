import { useState } from "react";
import { useLocation } from "react-router-dom";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Products from "../../Components/Products/Products";
import * as S from "./ProductList.styles";

type Props = {};

type Filters = {
  size?: string;
  colours?: string;
};

const ProductList = (props: Props) => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState<Filters>({} as Filters);
  const [sort, setSort] = useState("newest");

  console.log('sort', sort)

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value , // make it to lowercase once saved in db as lowercase
    });
  };

  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Title>{category}</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter Products: </S.FilterText>
          <S.Select name="colour" onChange={handleFilters}>
            <S.Option disabled selected>
              Color
            </S.Option>
            <S.Option>white</S.Option>
            <S.Option>black</S.Option>
            <S.Option>red</S.Option>
            <S.Option>blue</S.Option>
            <S.Option>yellow</S.Option>
            <S.Option>green</S.Option>
          </S.Select>
          <S.Select name="size" onChange={handleFilters}>
            <S.Option disabled selected>
              Size
            </S.Option>
            <S.Option>XS</S.Option>
            <S.Option>S</S.Option>
            <S.Option>M</S.Option>
            <S.Option>L</S.Option>
            <S.Option>XL</S.Option>
          </S.Select>
        </S.Filter>
        <S.Filter>
          <S.FilterText>Sort Products: </S.FilterText>
          <S.Select onChange={(e) => setSort(e.target.value)}>
            <S.Option value="newest">Newest</S.Option>
            <S.Option value="asc">Price (asc)</S.Option>
            <S.Option value="desc">Price (desc)</S.Option>
          </S.Select>
        </S.Filter>
      </S.FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </S.Container>
  );
};

export default ProductList;
