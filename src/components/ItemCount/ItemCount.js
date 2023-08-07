import Button from "react-bootstrap/Button";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container-itemcount">
      <div className="item-count">
        <Button variant="warning" onClick={decrement}>
          -
        </Button>

        <h4>{quantity}</h4>

        <Button variant="warning" onClick={increment}>
          +
        </Button>
      </div>
      <div>
        <Button variant="warning" onClick={() => onAdd(quantity)}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
