import React from "react";
import "./ItemDetailStyle.css";
import { numberFormatting, restyleCategory } from "../../helpers/helpers";

function ItemDetail({ product }) {
  console.log(product);

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
          <h6>Price: {numberFormatting(product.price)}</h6>
          <h6>Stock: {numberFormatting(product.stock)}</h6>
        </div>

        <button>Add to cart</button>
      </div>
    </>
  );
}

export default ItemDetail;
