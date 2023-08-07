import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Card className="item">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Img variant="top" className="image" src={item.img} />
      </Card.Body>
      <Card.Text>Precio: ${item.price}</Card.Text>
      <Card.Text>Stock disponible: {item.stock}</Card.Text>
      <Button variant="warning">
        <Link className="nav-link" to={`/item/${item.id}`}>
          Ver más
        </Link>
      </Button>
    </Card>
  );
};

export default Item;
