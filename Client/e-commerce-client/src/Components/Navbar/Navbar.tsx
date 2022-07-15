import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge/Badge";
import * as S from "./Navbar.styles";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Left>
          <S.Language>EN</S.Language>
          <S.SearchContainer>
            <S.Input placeholder="Search"/>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </S.SearchContainer>
        </S.Left>
        <S.Center>
          <S.Logo>RETAIL.</S.Logo>
        </S.Center>
        <S.Right>
          <S.MenuItem>REGISTER</S.MenuItem>
          <S.MenuItem>SIGN IN</S.MenuItem>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </S.Right>
      </S.Wrapper>
    </S.Container>
  );
};

export default Navbar;
