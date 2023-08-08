import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="item">
        <h2>No hay productos en el carrito!</h2>
        <Button variant="warning">
          <Link to="/">Productos</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <div className="cart">
        <Card>
          <Card.Text>Total: ${total()}</Card.Text>
          <Button variant="warning">
            <Link to={"/checkout"} className="nav-link">
              Ir al pedido
            </Link>
          </Button>
          <Button variant="warning" onClick={() => clearCart()}>
            Limpiar carrito
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
