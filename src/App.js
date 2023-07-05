import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Patitas PetShop"} />
      <ItemDetailContainer />
      <ItemCount
        stock={10}
        onAdd={(count) => console.log("Cantidad agregada ", count)}
      />
    </div>
  );
}

export default App;
