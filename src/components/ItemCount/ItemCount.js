import Button from "react-bootstrap/Button";
import { useState } from "react";

function ItemCount({ stock, addProduct }) {
  const [count, setCount] = useState(0);

  function incrementarCount() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decrementarCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container-itemcount">
      <div className="item-count">
        <Button onClick={decrementarCount} variant="warning">
          -
        </Button>

        <h4>{count}</h4>

        <Button onClick={incrementarCount} variant="warning">
          +
        </Button>
      </div>
      <div>
        <Button variant="warning" onClick={() => addProduct(count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
