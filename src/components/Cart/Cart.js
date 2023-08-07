import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Cart() {
  const { cart, clearCart, totalCart, totalQuantity } = useContext(CartContext);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="item">
          <h2>No hay productos!</h2>
          <Button variant="warning">
            <Link to="/">Productos</Link>
          </Button>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <Card key={item.id} className="item">
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
              <Card.Text>Precio: ${item.price}</Card.Text>
              <Card.Text>Cantidad: {totalQuantity()}</Card.Text>

              <Button variant="warning" onClick={() => clearCart(item.id)}>
                Borrar productos
              </Button>
            </Card>
          ))}

          <div className="item">
            <Card>
              <Card.Text>Total: ${totalCart()}</Card.Text>
              <Button variant="warning">
                <Link to={"/checkout"} className="nav-link">
                  Ir al pedido
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
