import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalItemsInCart } = useCartContext();

  return (
    <Link
      to="/cart"
      style={{ display: totalItemsInCart() > 0 ? "block" : "none" }}
      className="nav-link"
    >
      <FontAwesomeIcon
        icon={faCartShopping}
        size="lg"
        style={{ color: "#2f2f2f" }}
      />
      {totalItemsInCart()}
    </Link>
  );
}

export default CartWidget;
