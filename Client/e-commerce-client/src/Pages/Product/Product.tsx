import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Newsletter from "../../Components/Newsletter/Newsletter";
import * as S from "./Product.styled";

type Props = {};

const Product = (props: Props) => {
  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.ImageContainer>
          <S.Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </S.ImageContainer>
        <S.InfoContainer>
          <S.Title>Demin Jumpsuit</S.Title>
          <S.Description>
            This is a random description of clothing that I would not buy but
            you might like it
          </S.Description>
          <S.Price>£20</S.Price>
          <S.FilterContainer>
            <S.Filter>
              <S.FilterTitle>Colour</S.FilterTitle>
              <S.FilterColour color="black" />
              <S.FilterColour color="darkblue" />
              <S.FilterColour color="gray" />
            </S.Filter>
            <S.Filter>
              <S.FilterTitle>Size</S.FilterTitle>
              <S.FilterSize>
                <S.FilterSizeOption>XS</S.FilterSizeOption>
                <S.FilterSizeOption>S</S.FilterSizeOption>
                <S.FilterSizeOption>M</S.FilterSizeOption>
                <S.FilterSizeOption>L</S.FilterSizeOption>
              </S.FilterSize>
            </S.Filter>
          </S.FilterContainer>
          <S.AddContainer>
              <S.AmountContainer>
                  <Remove />
                  <S.Amount>1</S.Amount>
                  <Add />
              </S.AmountContainer>
              <S.Button>ADD TO CART</S.Button>
          </S.AddContainer>
        </S.InfoContainer>
      </S.Wrapper>
      <Newsletter />
      <Footer />
    </S.Container>
  );
};

export default Product;
