import { useState } from 'react';

import Card from './Card';

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Spaghetti');
  const [price, setPrice] = useState(2.99);

  const handlerPlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };

  const handlerMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      return count;
    });
  };

  const handlerChangeName = (value) => {
    setName(value);
  };

  const handlerChangePrice = (value) => {
    setPrice(value);
  };

  const handlerAddProduct = () => {
    console.log('handlerAddProduct');
  }

  return (
    <>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}

        handlerPlus={handlerPlus}
        handlerMinus={handlerMinus}
        handlerChangeName={handlerChangeName}
        handlerChangePrice={handlerChangePrice}
        handlerAddProduct={handlerAddProduct}
      />
    </>
  );
}
export default Product;
