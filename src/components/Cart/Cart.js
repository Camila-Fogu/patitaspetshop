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
        <h3>No hay productos en el carrito!</h3>
        <Button variant="warning">
          <Link to="/" className="nav-link">
            Productos
          </Link>
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
          <Card.Text className="cart-button">
            PRECIO TOTAL: ${total()}
          </Card.Text>
          <Button variant="warning" className="cart-button">
            <Link to={"/checkout"} className="nav-link">
              Terminar pedido
            </Link>
          </Button>
          <Button
            variant="warning"
            onClick={() => clearCart()}
            className="cart-button"
          >
            Limpiar carrito
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
