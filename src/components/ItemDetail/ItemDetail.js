import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemDetail = ({ id, name, price, category, img, description, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <Card className="item" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Img variant="top" src={img} />
        <Card.Text>{description}</Card.Text>
        <Card.Text>Precio: ${price}</Card.Text>
        <Card.Text>Stock disponible: {stock}</Card.Text>
      </Card.Body>
      <Card.Body>
        {quantityAdded > 0 ? (
          <Button variant="warning">
            <Link to="/cart">Finalizar compra</Link>
          </Button>
        ) : (
          <ItemCount
            className="nav-link"
            initial={1}
            stock={stock}
            onAdd={handleOnAdd}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
