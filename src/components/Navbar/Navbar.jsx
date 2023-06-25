import { useState } from "react";
import CartWidget from "./CartWidget";
import "./NavbarStyle.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar__items">
        <a href="/" className="navbar__logo">
          <h1 className="logo">MH Store </h1>
          <span class="material-symbols-outlined">liquor</span>
        </a>
        <div className="navbar__icons" onClick={handleClicked}>
          {clicked ? (
            <span class="material-symbols-outlined">close</span>
          ) : (
            <span class="material-symbols-outlined">menu</span>
          )}
        </div>
        <ul className={clicked ? "navbar__menu active" : "navbar__menu"}>
          <li>
            <a href="/">Sparkling Wines</a>
          </li>
          <li>
            <a href="/">Still Wines</a>
          </li>
          <li>
            <a href="/">Champagnes</a>
          </li>
          <li>
            <a href="/">Spirits</a>
          </li>
          <li>
            <a href="/">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
