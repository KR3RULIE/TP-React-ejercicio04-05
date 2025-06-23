import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalstorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalstorage);
  useEffect(() => {
    console.log("desde use efect");
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aqui deberia guardar la tarea");
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const tareasFiltradas = tareas.filter((item) => item !== nombreTarea);
    setTareas(tareasFiltradas);
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
      <ListaTarea tareas={tareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;
