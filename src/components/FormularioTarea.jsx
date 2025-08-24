import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { leerTareas } from "../helpers/queries";

const FormularioTarea = () => {
  const [listaTareas, setListaTareas] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const respuesta = await leerTareas();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaTareas(datos);
    } else {
      console.info("Ocurrio un error al buscar las tareas");
    }
  };

  const agregarTareas = (data) => {
    console.log("Nueva tarea:", data.inputTarea);
    reset();
  };

  const borrarTarea = (idABorrar) => {
    const tareasFiltradas = listaTareas.filter(
      (item) => item._id !== idABorrar
    );
    setListaTareas(tareasFiltradas);
  };

  return (
    <section>
      <Form onSubmit={handleSubmit(agregarTareas)}>
        <Form.Group className="d-flex mb-1">
          <Form.Control
            type="text"
            placeholder="ingresa una tarea"
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

      <Button variant="success" className="mb-3" onClick={obtenerTareas}>
        Mostrar tareas
      </Button>

      <ListaTarea listaTareas={listaTareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTarea;
