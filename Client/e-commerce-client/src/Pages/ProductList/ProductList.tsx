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
}

const ProductList = (props: Props) => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState<Filters>({} as Filters);
  const [sort, setSort] = useState("newest");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  // console.log(filters)
  
  return (
    <S.Container>
      <Announcement />
      <Navbar />
      <S.Title>Dresses</S.Title>
      <S.FilterContainer>
        <S.Filter>
          <S.FilterText>Filter Products: </S.FilterText>
          <S.Select name="colour" onChange={handleFilters}>
            <S.Option disabled>
              Color
            </S.Option>
            <S.Option>White</S.Option>
            <S.Option>Black</S.Option>
            <S.Option>Red</S.Option>
            <S.Option>Blue</S.Option>
            <S.Option>Yellow</S.Option>
            <S.Option>Green</S.Option>
          </S.Select>
          <S.Select name="size" onChange={handleFilters} >
            <S.Option disabled>
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
          <S.Select>
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
