import { useState } from 'react';

import Card from './Card';
import ViewList from './ViewList';

function Product() {
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Spaghetti');
  const [price, setPrice] = useState(2.99);

  const [items, setItems] = useState([]);

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
    console.log('handlerAddProduct: name, price', name, price);
    const newItem = {
      name: name,
      price: price,
    };

    const newList = [...items, newItem];
    console.log("newList:", newList)
    setItems(newList);
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

      <ViewList list={items} />
    </>
  );
}
export default Product;
