import { useState } from 'react';

import Card from './Card';
import ViewList from './ViewList';

function Product() {
  const [count, setCount] = useState(1);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState('Banana');
  const [price, setPrice] = useState(1.25);

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

const purchaseTotal = () => {
  let total = (count * price) - (count * price * (discount/100));
  return total.toFixed(2);
}

  const handlerAddProduct = () => {
    console.log('handlerAddProduct: name, price', name, price);
    const newItem = {
      name: name,
      count: count,
      price: price,
      discount: discount,
      total: purchaseTotal(),
    };

/* The line `const newList = [...items, newItem];` is creating a new array called `newList` by
spreading the elements of the `items` array and adding a new item `newItem` at the end. This is a
way to add a new item to an existing array without modifying the original array. */
    const newList = [...items, newItem];
    console.log("newList:", newList)
    setItems(newList);
    setName('Banana');
    setPrice(1.25);
  }

  return (
    <>
      <Card
        name={name}
        count={count}
        price={price}
        discount={discount}
        total={purchaseTotal}

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
