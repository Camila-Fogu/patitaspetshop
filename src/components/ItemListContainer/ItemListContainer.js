import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProductosFromFirebase = async () => {
      let ref = categoryId
        ? getDocs(
            query(
              collection(db, "productos"),
              where("category", "==", categoryId)
            )
          )
        : getDocs(collection(db, "productos"));
      await ref.then((querySnapshot) => {
        const productsData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setItems(productsData);
      });
    };
    getProductosFromFirebase();
  }, [categoryId]);

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
