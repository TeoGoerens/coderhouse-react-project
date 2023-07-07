import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainerStyle.css";
import data from "../../assets/data/products.json";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    prom.then((result) => {
      setProduct(result.find((prod) => prod.id === Number(id)));
    });
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      {product.length !== 0 && <ItemDetail product={product} />}
    </div>
  );
}

export default ItemDetailContainer;
