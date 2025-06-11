import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const FormularioTarea = () => {
  return (
    <div>
      <Form>
        <Form.Group className="d-flex mb-3">
          <Form.Control type="text" placeholder="name@example.com" />
          <Button variant="info">Enviar</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioTarea;
