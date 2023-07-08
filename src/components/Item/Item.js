import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <Card className="item">
      <Card.Img variant="top" className="image" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Stock disponible: {stock}</Card.Text>
        <Button variant="warning">
          <Link to={`/item/${id}`}>Ver más</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
