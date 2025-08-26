import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  borrarTareasPorID,
  leerTareas,
  editarTareas,
} from "../helpers/queries";
const ItemsTarea = ({ tarea, setListaTareas }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.tarea}
      <div className="d-flex gap-2">
        <Button
          variant="warning"
          onClick={() => {
            Swal.fire({
              title: "Editar tarea",
              input: "text",
              inputLabel: "Modifica la tarea",
              inputValue: tarea.tarea, // mostramos el texto actual
              showCancelButton: true,
              confirmButtonText: "Guardar",
              cancelButtonText: "Cancelar",
              inputValidator: (value) => {
                if (!value || value.trim().length < 2) {
                  return "La tarea debe tener al menos 2 caracteres";
                }
              },
            }).then(async (result) => {
              if (result.isConfirmed) {
                const respuesta = await editarTareas(
                  { tarea: result.value },
                  tarea._id
                );

                if (respuesta.status === 200) {
                  Swal.fire({
                    title: "Editado!",
                    text: "La tarea fue actualizada correctamente",
                    icon: "success",
                  });

                  const respuestaTareas = await leerTareas();
                  const tareasActualizadas = await respuestaTareas.json();
                  setListaTareas(tareasActualizadas);
                } else {
                  Swal.fire({
                    title: "Error!",
                    text: "No se pudo editar la tarea",
                    icon: "error",
                  });
                }
              }
            });
          }}
        >
          📝
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            Swal.fire({
              title: "Estas seguro/a?",
              text: "Esta acción es irrevercible!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Sí, borrar!",
              cancelButtonText: "No lo borres!",
            }).then(async (result) => {
              if (result.isConfirmed) {
                const respuesta = await borrarTareasPorID(tarea._id);
                if (respuesta.status === 200) {
                  Swal.fire({
                    title: "Borrado!",
                    text: `La tarea "${tarea.tarea}" fue borrada exitosamente`,
                    icon: "success",
                  });
                  const respuestaTareas = await leerTareas();
                  const tareasActualizadas = await respuestaTareas.json();
                  setListaTareas(tareasActualizadas);
                } else {
                  Swal.fire({
                    title: "Ocurrio un error!",
                    text: `La tarea "${tarea.tarea}" no pudo ser borrada`,
                    icon: "error",
                  });
                }
              }
            });
          }}
        >
          🗑
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
