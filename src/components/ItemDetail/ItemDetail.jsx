import React, { useState } from "react";
import "./ItemDetailStyle.css";
import { numberFormatting, restyleCategory } from "../../helpers/helpers";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  const handleSustract = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="ItemDetail__ImageContainer">
        <img
          src={require("../../assets/img/" + product.image)}
          alt={product.name}
        />
      </div>
      <div className="ItemDetail__TextContainer">
        <h2>{product.name}</h2>
        <h5>Category: {restyleCategory(product.category)}</h5>
        <p>{product.description}</p>

        <div>
          <h6>Price: ${numberFormatting(product.price)}</h6>
          <h6>Stock: {numberFormatting(product.stock)}</h6>
        </div>

        <ItemCount
          quantity={quantity}
          handleSustract={handleSustract}
          handleAdd={handleAdd}
        />
        <button className="ItemDetail__AddToCart">Add to cart</button>
      </div>
    </>
  );
}

export default ItemDetail;
