import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock, category }) => {
  return (
    <Card className="item">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img variant="top" className="image" src={img} />
      </Card.Body>
      <Card.Text>Precio: ${price}</Card.Text>
      <Card.Text>Stock disponible: {stock}</Card.Text>
      <Button variant="warning">
        <Link className="nav-link" to={`/item/${id}`}>
          Ver más
        </Link>
      </Button>
    </Card>
  );
};

export default Item;
