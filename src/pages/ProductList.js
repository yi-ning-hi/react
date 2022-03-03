import React from 'react';
import { data } from '../data/product';
import { Link } from 'react-router-dom';

function ProductList(props) {
  return (
    <>
      <h1>ProductList</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li>
              <Link to={'/product-detail/' + v.id}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductList;
