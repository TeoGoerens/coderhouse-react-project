import { useState } from "react";
import CartWidget from "./CartWidget";
import "./NavbarStyle.css";
import { NavLink } from "react-router-dom";
import data from "../../assets/data/products.json";
import { restyleCategory } from "../../helpers/helpers";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  let categories = data.map((product) => product.category);
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
            <NavLink to="/">
              <CartWidget />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
