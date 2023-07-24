import React, { useContext } from "react";
import "./CartContainerStyle.css";
import { CartContext } from "../../context/CartContext";
import { numberFormatting } from "../../helpers/helpers";

const CartContainer = () => {
  const { cart, totalCartAmount, handleEmptyCart } = useContext(CartContext);

  return (
    <div className="CartContainer">
      <h1>Cart Details</h1>
      {cart.map((prod) => (
        <div className="CartContainer__ProductDetail" key={prod.id}>
          <img
            src={require("../../assets/img/" + prod.image)}
            alt={prod.name}
          />
          <h4>{prod.name}</h4>
          <p>Quantity: {prod.quantity}</p>
          <p>Unit Price: ${numberFormatting(prod.price)}</p>
          <p>Total Price: ${numberFormatting(prod.quantity * prod.price)}</p>
        </div>
      ))}

      <h3>Total Cart: ${numberFormatting(totalCartAmount())}</h3>
      <button onClick={handleEmptyCart()}>Empty Cart</button>
    </div>
  );
};

export default CartContainer;
