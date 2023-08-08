import { useState } from "react";
import { Button } from "react-bootstrap";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    };
    onConfirm(userData);
  };

  return (
    <div>
      <form onSubmit={handleConfirm}>
        <label>
          Nombre
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label>
          Telefono
          <input
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <div>
          <Button variant="warning" type="submit">
            Crear orden
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
