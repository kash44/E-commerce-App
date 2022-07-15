import { Send } from "@material-ui/icons";
import * as S from "./Styles";

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <S.Container>
      <S.Title>Newsletter</S.Title>
      <S.Description>
        Get timely updates from your favourite products
      </S.Description>
      <S.InputContainer>
        <S.Input placeholder="Your email" />
        <S.Button>
          <Send />
        </S.Button>
      </S.InputContainer>
    </S.Container>
  );
};

export default Newsletter;
