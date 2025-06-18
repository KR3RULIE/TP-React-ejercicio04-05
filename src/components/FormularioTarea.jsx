import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aqui deberia guardar la tarea");
    setTareas([...tareas, tarea]);
    setTarea("")
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex mb-3">
          <Form.Control
            type="text"
            placeholder="ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea />
    </section>
  );
};

export default FormularioTarea;
