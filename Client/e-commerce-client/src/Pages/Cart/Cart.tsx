import { Add, Remove } from "@material-ui/icons";
import Announcement from "../../Components/Announcement/Announcement";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import * as S from "./Cart.styles";

type Props = {};

const Cart = (props: Props) => {
  return (
    <S.Container>
      <Navbar />
      <Announcement />
      <S.Wrapper>
        <S.Title> YOUR BAG</S.Title>
        <S.Top>
          <S.TopButton> CONTINUE SHOPPING</S.TopButton>
          <S.TopTexts>
            <S.TopText>Shopping Bag(2)</S.TopText>
            <S.TopText>Your WishList (0)</S.TopText>
          </S.TopTexts>
          <S.TopButton type="filled"> CHECKOUT NOW</S.TopButton>
        </S.Top>
        <S.Bottom>
          <S.Info>
            <S.Product>
              <S.ProductDetail>
                <S.Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <S.Details>
                  <S.ProductName>
                    <b>Product: </b> Philz T-shirt
                  </S.ProductName>
                  <S.ProductId>
                    <b>ID: </b> 9347974937493
                  </S.ProductId>
                  <S.ProductColor color="black" />
                  <S.ProductSize>
                    <b>Size: </b> M
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>
                <S.ProductAmountContainer>
                  <Add />
                  <S.ProductAmount>2</S.ProductAmount>
                  <Remove />
                </S.ProductAmountContainer>
                <S.ProductPrice>$30</S.ProductPrice>
              </S.PriceDetail>
            </S.Product>
            <S.Hr />
            <S.Product>
              <S.ProductDetail>
                <S.Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <S.Details>
                  <S.ProductName>
                    <b>Product: </b> Thunder shoes
                  </S.ProductName>
                  <S.ProductId>
                    <b>ID: </b> 9347974937493
                  </S.ProductId>
                  <S.ProductColor color="black" />
                  <S.ProductSize>
                    <b>Size: </b> 37.5
                  </S.ProductSize>
                </S.Details>
              </S.ProductDetail>
              <S.PriceDetail>
                <S.ProductAmountContainer>
                  <Add />
                  <S.ProductAmount>2</S.ProductAmount>
                  <Remove />
                </S.ProductAmountContainer>
                <S.ProductPrice>$30</S.ProductPrice>
              </S.PriceDetail>
            </S.Product>
          </S.Info>
          <S.Summary>
            <S.SummaryTitle>ORDER SUMMARY</S.SummaryTitle>
            <S.SummaryItem>
              <S.SummaryItemText>Subtotal</S.SummaryItemText>
              <S.SummaryItemPrice> $80 </S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText>Estimated Shipping</S.SummaryItemText>
              <S.SummaryItemPrice> $ 5.90 </S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem>
              <S.SummaryItemText> Shipping Discount</S.SummaryItemText>
              <S.SummaryItemPrice> $ -5.90 </S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryItem type="total">
              <S.SummaryItemText>Total</S.SummaryItemText>
              <S.SummaryItemPrice> $80 </S.SummaryItemPrice>
            </S.SummaryItem>
            <S.SummaryButton>CHECKOUT NOW</S.SummaryButton>
          </S.Summary>
        </S.Bottom>
      </S.Wrapper>
      <Footer />
    </S.Container>
  );
};

export default Cart;
