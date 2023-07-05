import { useState } from "react";
import Button from "react-bootstrap/Button";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(0);

  function handleClickSuma() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleClickResta() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container-itemcount">
      <div className="item-count">
        <Button onClick={handleClickResta} variant="warning">
          -
        </Button>

        <h4>{count}</h4>

        <Button onClick={handleClickSuma} variant="warning">
          +
        </Button>
      </div>
      <div>
        <Button variant="warning" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
