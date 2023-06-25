import "./ItemListContainerStyle.css";

function ItemListContainer({ greeting }) {
  return (
    <div className="heading">
      <h1>{greeting}</h1>;
    </div>
  );
}

export default ItemListContainer;
