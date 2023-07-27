import React, { useContext, useEffect, useState } from "react";
import "./CheckoutStyle.css";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../firebase/firebase";

const Checkout = () => {
  const { cart, totalCartAmount, emptyCart } = useContext(CartContext);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderId, setOrderId] = useState("");

  const [date, setDate] = useState();

  useEffect(() => {
    const today = new Date();
    setDate(today);
  }, []);

  const handleValues = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      client: formValues,
      orderdate: date,
      content: cart,
      amount: totalCartAmount(),
    };

    const ordersInDatabase = collection(database, "orders");

    addDoc(ordersInDatabase, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
    });
  };

  if (orderId) {
    return (
      <div className="CheckoutContainer">
        <h1>Thanks for shopping with us!</h1>
        <p>
          Your order ID is: <strong>{orderId}</strong>{" "}
        </p>
      </div>
    );
  }

  return (
    <div className="CheckoutContainer">
      <h1>Submit your personal information</h1>

      <form className="CheckoutForm" onSubmit={handleSubmit}>
        <input
          className="CheckoutForm__Input"
          type="text"
          value={formValues.name}
          placeholder="Write your name"
          onChange={handleValues}
          name="name"
        />
        <input
          className="CheckoutForm__Input"
          type="email"
          value={formValues.email}
          placeholder="Write your email"
          onChange={handleValues}
          name="email"
        />
        <input
          className="CheckoutForm__Input"
          type="text"
          value={formValues.phone}
          placeholder="Write your phone number"
          onChange={handleValues}
          name="phone"
        />

        <button className="FormButton">Submit purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
