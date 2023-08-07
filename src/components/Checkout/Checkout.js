import { Timestamp } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { db } from "../../firebase/config";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useState } from "react";
import {
  getDocs,
  collection,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: { name, phone, email },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = collection(db, "productos");
      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedFromFirestore;
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;
        const productAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;
        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });
      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "order");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("hay productos que estan fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h2>Se esta creando el pedido...</h2>;
  }
  if (orderId) {
    return <h2>El id de su pedido es: {orderId}</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
