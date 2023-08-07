import { useState } from "react";
import { Button } from "bootstrap";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("");

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
        <label className="label">
          Nombre
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className="label">
          Apellido
          <input
            className="input"
            type="text"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
            required
          />
        </label>
        <label className="label">
          Telefono
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            required
          />
        </label>
        <label className="label">
          Email
          <input
            className="input"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required
          />
        </label>
        <label className="label">
          Verificacion Email
          <input
            className="input"
            type="email"
            value={emailVerification}
            onChange={({ target }) => setEmailVerification(target.value)}
            required
          />
        </label>
        <div>
          <Button variant="warning" type="submit">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
