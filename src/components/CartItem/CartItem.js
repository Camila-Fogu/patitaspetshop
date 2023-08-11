import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <ListGroup horizontal key={id} className="cart-item">
      <ListGroup.Item>{name}</ListGroup.Item>
      <ListGroup.Item>Precio: ${price}</ListGroup.Item>
      <ListGroup.Item>Cantidad: {quantity}</ListGroup.Item>
      <ListGroup.Item>Subtotal: ${quantity * price}</ListGroup.Item>
      <ListGroup.Item>
        <Button variant="warning" onClick={() => removeItem(id)}>
          Borrar
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItem;
