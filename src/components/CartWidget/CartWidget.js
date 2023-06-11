import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <>
      <FontAwesomeIcon
        icon={faCartShopping}
        size="lg"
        style={{ color: "#2f2f2f" }}
      />
      <div> 0 </div>
    </>
  );
}

export default CartWidget;
