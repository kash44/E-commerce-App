import React, { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import { ProductsProps } from "./Styles";
import Product from "../Product/Product";
import * as S from "./Styles";
import axios from "axios";

const Products = ({ category, filters, sort }: ProductsProps) => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]); // why does the any[] generic work?
  console.log('products',  products);
  // console.log('category', category)
  // console.log('filteredProducts', filteredProducts)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:3000/api/products?category=${category}`
            : "http://localhost:3000/api/products"
        );
        setProducts(res.data.products);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) => {
            return item[key].includes(value);
          })
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <S.Container>
      {category
        ? filteredProducts.map((product) => (
            <Product  product={product} key={product.id} />
          ))
        : products
            .slice(0, 8)
            .map((product) => <Product  product={product} key={product._id} />)
      }

      {/* {filteredProducts.map((product) => (
        <Product {...product} key={product.id} />
      ))} */}
    </S.Container>
  );
};

export default Products;
