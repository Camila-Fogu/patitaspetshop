import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ name, img, category, description, price, stock }) => {
  return (
    <Card className="item-detail" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{category}</Card.Text>
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
