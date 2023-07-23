import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const newItem = { ...product, quantity };
    const initialCart = [...cart];
    const currentItem = initialCart.find((item) => item.id === newItem.id);

    if (currentItem) {
      currentItem.quantity += quantity;
      setCart(initialCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
