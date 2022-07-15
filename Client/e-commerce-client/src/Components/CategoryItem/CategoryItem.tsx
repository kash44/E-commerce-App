import { CategoriesItemProps } from "./Styles";
import * as S from "./Styles";
import { Link } from "react-router-dom";

const CategoryItem = ({
  image,
  title,
  url,
  button,
  id,
  category
}: CategoriesItemProps) => {
  return (
    <S.Container>
      <Link to={`/products/${category}`}>
      <S.Image src={image} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Button> SHOP NOW </S.Button>
      </S.Info>
      </Link>
    </S.Container>
  );
};

export default CategoryItem;
