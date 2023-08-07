import { useState } from "react";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cartListProducts, totalCartAmount, clearCart } = useCartContext();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: values,
      items: cartListProducts,
      total: totalCartAmount(),
    };

    const itemsCollectionRef = collection(db, "order");
    const response = await addDoc(itemsCollectionRef, order);
    setOrderId(response.id);
    clearCart();
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Realizar Pedido</h2>
        <div>
          <label>Nombre</label>
          <div>
            <input
              placeholder="Nombre"
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input
              placeholder="Email"
              id="email"
              name="email"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <Button variant="warning" is-link>
            Enviar
          </Button>
        </div>
      </form>

      <div>
        {orderId ? (
          <div>
            <h2 className="title is-3">Gracias por tu Compra!</h2>
            <p>Tu número de compra es: {orderId}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Checkout;
