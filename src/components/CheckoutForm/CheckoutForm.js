import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

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
      <Form onSubmit={handleConfirm}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teléfono"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Group>

        <div>
          <Button variant="warning" type="submit" className="cart-button">
            Crear orden
          </Button>
        </div>
      </Form>
    </div>
  );
};

/*<label>
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

                  <label>
          Email
          <input
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        </label>*/

export default CheckoutForm;
