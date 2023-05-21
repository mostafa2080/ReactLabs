import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Shared/Card/card';
import './products.css';
import { InfinitySpin } from 'react-loader-spinner';

const Products = () => {
  const [products, setProducts] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    

    fetchData();
  }, []);

  return (
    <div className="cont">
      {!products ? (
        <div className="spin">
          <InfinitySpin />
        </div>
      ) : (
        products.map((product) => <Card product={product} key={product.id} />)
      )}
    </div>
  );
};

export default Products;
