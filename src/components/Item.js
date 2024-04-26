import React, {useState} from "react";

function Item({ item }) {
  const [isInCart, setIsInCart] = useState(false);

  const addToCart = () => {
    setIsInCart(true);
  };
  const removeFromCart = () => {
    setIsInCart(false);
  }
  const buttonText = isInCart ? "Remove From Cart" : " Add To Cart";
  let itemClass;

  if (isInCart) {
    itemClass = isInCart ? "in-cart" : "";
  }

  return (
    <li className={itemClass}> {item && (
      <>
    
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      </>
      )}
      <button className="add" onClick={isInCart ? removeFromCart : addToCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
