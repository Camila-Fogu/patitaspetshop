import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const getProductosFromFirebase = async () => {
      const docRef = doc(db, "productos", productId);

      const querySnapshot = await getDoc(docRef);
      const product = querySnapshot.data();
      product["id"] = productId;
      setItem(product);
    };
    getProductosFromFirebase();
  }, [productId]);

  return (
    <div className="item-list">
      <ItemDetail producto={item} />
    </div>
  );
};

export default ItemDetailContainer;
