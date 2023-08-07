import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";
import Card from "react-bootstrap/Card";

function Cart() {
  const { cartListProducts, deleteProductById } = useCartContext();

  return (
    <div>
      {cartListProducts.length === 0 ? (
        <div>
          <h2>No hay productos!</h2>
          <Button variant="warning">
            <Link to="/">Productos</Link>
          </Button>
        </div>
      ) : (
        <div>
          {cartListProducts.map((item) => (
            <Card key={item.id}>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Img variant="top" className="image" src={item.img} />
              </Card.Body>
              <Card.Text>Precio: ${item.price}</Card.Text>
              <Card.Text>{item.count}</Card.Text>

              <Button
                variant="warning"
                onClick={() => deleteProductById(item.id)}
              >
                [ X ]
              </Button>
            </Card>
          ))}

          <div>
            <Card>
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
