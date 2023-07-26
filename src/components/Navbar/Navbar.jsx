import { useEffect, useState } from "react";
import CartWidget from "./CartWidget";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";
import { restyleCategory } from "../../helpers/helpers";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/firebase";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const productsFromDatabase = collection(database, "products");
    getDocs(productsFromDatabase).then((resp) => {
      const allCategories = resp.docs.map((doc) => doc.data().category);
      setCategories(allCategories);
    });
  }, []);

  let uniqueCategories = [...new Set(categories)].sort();

  return (
    <>
      <nav className="navbar__items">
        <NavLink to="/" className="navbar__logo">
          <h1 className="logo">MH Store </h1>
          <span class="material-symbols-outlined">liquor</span>
        </NavLink>
        <div className="navbar__icons" onClick={handleClicked}>
          {clicked ? (
            <span class="material-symbols-outlined">close</span>
          ) : (
            <span class="material-symbols-outlined">menu</span>
          )}
        </div>
        <ul className={clicked ? "navbar__menu active" : "navbar__menu"}>
          {uniqueCategories.map((category, index) => (
            <li key={index}>
              <NavLink to={`/category/${category}`}>
                {restyleCategory(category)}
              </NavLink>
            </li>
          ))}

          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
