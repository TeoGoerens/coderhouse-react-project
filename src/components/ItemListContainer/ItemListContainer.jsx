import "./ItemListContainerStyle.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { restyleCategory } from "../../helpers/helpers";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productsFromDatabase = collection(database, "products");

    getDocs(productsFromDatabase).then((resp) => {
      const productsArray = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      if (id) {
        setProducts(productsArray.filter((prod) => prod.category === id));
      } else {
        setProducts(productsArray);
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
