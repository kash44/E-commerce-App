import React from 'react'
import * as S from './Styles';
import { popularProducts } from '../../data';
import Product from '../Product/Product';
import { ProductsProps } from './Styles';

type Props = {}

const Products = ({ category, filters, sort }: ProductsProps) => {
  return (
    <S.Container>
        { popularProducts.map((product) => (
            <Product {...product} key={product.id} />
        ))}
    </S.Container>
  )
}

export default Products;