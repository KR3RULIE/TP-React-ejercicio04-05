import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="d-flex mb-3">
          <Form.Control type="text" placeholder="ingresa una tarea" />
          <Button variant="info">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTarea />
    </section>
  );
};

export default FormularioTarea;
