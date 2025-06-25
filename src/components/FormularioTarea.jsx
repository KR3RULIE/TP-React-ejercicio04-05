import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const tareasLocalstorage = JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [tareas, setTareas] = useState(tareasLocalstorage);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log("desde use efect");
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);

  const agregarTareas = (data) => {
    console.log("aqui deberia guardar la tarea");
    console.log(data.inputTarea);
    setTareas([...tareas, data.inputTarea]);
    reset();
  };

  const borrarTarea = (indiceABorrar) => {
    const tareasFiltradas = tareas.filter((item, indice) => indice !== indiceABorrar);
    setTareas(tareasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(agregarTareas)}>
        <Form.Group className="d-flex mb-1">
          <Form.Control
            type="text"
            placeholder="ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            {...register("inputTarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La tarea debe tener 3 caracteres como minimo",
              },
              maxLength: {
                value: 50,
                message: "La tarea debe tener 50 caracteres como maximo",
              },
              pattern: {
                value: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{1,50}$/,
                message:
                  "La tarea debe contener caracteres alfa numericos mayusculas o minusculas",
              },
            })}
          />
          <Button variant="info" type="submit">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="mb-3 text-danger">
          {errors.inputTarea?.message}
        </Form.Text>
      </Form>
      <ListaTarea tareas={tareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;
