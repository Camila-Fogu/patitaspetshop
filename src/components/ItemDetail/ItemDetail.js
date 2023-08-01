import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
        <ItemCount
          stock={stock}
          onAdd={(count) => console.log("Cantidad agregada ", count)}
        />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
