import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addProductToCart } = useCartContext();

  const addProduct = (count) => {
    addProductToCart(producto, count);
  };

  return (
    <Card className="item" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>{producto.category}</Card.Text>
        <Card.Img variant="top" src={producto.img} />
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>Precio: ${producto.price}</Card.Text>
        <Card.Text>Stock disponible: {producto.stock}</Card.Text>
      </Card.Body>
      <Card.Body>
        <ItemCount stock={producto.stock} addProduct={addProduct} />
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
