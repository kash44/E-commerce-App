import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import * as S from "./Styles";

type Props = {};

const Footer = (props: Props) => {
  return (
    <S.Container>
      <S.Left>
        <S.Logo>KASH.</S.Logo>
        <S.Description>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </S.Description>
        <S.SocialContainer>
          <S.SocialIcon color="#3B5999">
            <Facebook />
          </S.SocialIcon>
          <S.SocialIcon color="#E4405F">
            <Instagram />
          </S.SocialIcon>
          <S.SocialIcon color="#55ACEE">
            <Twitter />
          </S.SocialIcon>
          <S.SocialIcon color="#E60023">
            <Pinterest />
          </S.SocialIcon>
        </S.SocialContainer>
      </S.Left>
      <S.Center>
        <S.Title>Useful Links</S.Title>
        <S.List>
          <S.ListItem>Home</S.ListItem>
          <S.ListItem>Cart</S.ListItem>
          <S.ListItem>Man Fashion</S.ListItem>
          <S.ListItem>Woman Fashion</S.ListItem>
          <S.ListItem>Accessories</S.ListItem>
          <S.ListItem>My Account</S.ListItem>
          <S.ListItem>Wishlist</S.ListItem>
          <S.ListItem>Terms</S.ListItem>
        </S.List>
      </S.Center>
      <S.Right>
        <S.Title>Contact</S.Title>
        <S.ContactItem>
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path, South
          Tobinchester 98336
        </S.ContactItem>
        <S.ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +44 773798756
        </S.ContactItem>
        <S.ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> kash@contact.com
        </S.ContactItem>
        <S.Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </S.Right>
    </S.Container>
  );
};

export default Footer;
