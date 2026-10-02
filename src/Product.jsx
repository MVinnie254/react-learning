import { useState } from "react";

function Product(props) {
  const [count, setCount] = useState(0);

  function addToCart() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>{props.name}</h3>
      <p>Price: KSh {props.price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

      <p>Added to cart: {count}</p>
    </div>
  );
}

export default Product;