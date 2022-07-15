import * as S from "./Login.styles";

type Props = {};

const Login = (props: Props) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>SIGN IN</S.Title>
        <S.Form>
          <S.Input placeholder="username" />
          <S.Input placeholder="password" />
          <S.Button> LOGIN </S.Button>
          <S.Link>FORGOT PASSWORD</S.Link>
          <S.Link>CREATE NEW ACCOUNT</S.Link>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
