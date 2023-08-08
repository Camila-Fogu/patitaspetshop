import { useContext, useState } from "react";
import { db } from "../../firebase/config";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  where,
  writeBatch,
  documentId,
} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Button } from "react-bootstrap";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cart, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "productos");
      const productosAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productosAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productosAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productosAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Sin stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Se esta generando su orden...</h2>;
  }

  if (orderId) {
    return <h2>Orden ID: {orderId}</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutForm onConfirm={createOrder} />
      <Button variant="warning">
        <Link className="nav-link" to="/">
          Salir
        </Link>
      </Button>
    </div>
  );
};

export default Checkout;
