import "./ItemListContainerStyle.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { restyleCategory } from "../../helpers/helpers";
import { collection, getDocs, query, where } from "firebase/firestore";
import { database } from "../../firebase/firebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productsFromDatabase = collection(database, "products");
    const myQuery = id
      ? query(productsFromDatabase, where("category", "==", id))
      : productsFromDatabase;

    getDocs(myQuery).then((resp) => {
      const productsArray = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setProducts(productsArray);
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
