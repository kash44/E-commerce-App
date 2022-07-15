import React from 'react'
import * as S from './Styles';
import { categories } from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem';

type Props = {}

const Categories = (props: Props) => {
  return (
      <S.Container>
          {categories.map((category) => (
              <CategoryItem {...category} key={category.id}/>
          ))}
      </S.Container>
  )
}

export default Categories