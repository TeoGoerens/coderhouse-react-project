import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <MyNavbar />
      <ItemListContainer greeting="Welcome to MH Store" />
    </>
  );
}

export default App;
