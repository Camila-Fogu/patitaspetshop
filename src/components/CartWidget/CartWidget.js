import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link
      to="/cart"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
      className="nav-link"
    >
      <FontAwesomeIcon
        icon={faCartShopping}
        size="lg"
        style={{ color: "#2f2f2f" }}
      />
      {totalQuantity}
    </Link>
  );
};
export default CartWidget;
