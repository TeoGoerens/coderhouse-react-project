import "./ItemListContainerStyle.css";
import data from "../../assets/data/products.json";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { restyleCategory } from "../../helpers/helpers";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    prom.then((result) => {
      if (id) {
        setProducts(result.filter((product) => product.category === id));
        console.log(id);
      } else {
        setProducts(result);
        console.log(id);
      }
    });
  }, [id]);

  return (
    <div className="itemListContainer">
      <h1>
        Welcome to MH Store: {id ? restyleCategory(id) : `Total Products`}
      </h1>
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
