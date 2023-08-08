import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <Card key={id} className="cart">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Text>Precio: ${price}</Card.Text>
      <Card.Text>Cantidad: {quantity}</Card.Text>
      <Card.Text>Subtotal: ${quantity * price}</Card.Text>

      <Button variant="warning" onClick={() => removeItem(id)}>
        Borrar
      </Button>
    </Card>
  );
};

export default CartItem;
