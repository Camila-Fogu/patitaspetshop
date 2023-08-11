import Button from "react-bootstrap/Button";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

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
    <div>
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
        <Button
          variant="warning"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
