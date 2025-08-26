import { Button, ListGroup } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarTareasPorID } from "../helpers/queries";
const ItemsTarea = ({ tarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.tarea}
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
                  text: `La tarea ${tarea.tarea} fue borrada exitosamente`,
                  icon: "success",
                });
                
              } else {
                Swal.fire({
                  title: "Ocurrio un error!",
                  text: `La tarea ${tarea.tarea} no pudo ser borrada`,
                  icon: "error",
                });
              }
            }
          });
          borrarTarea(tarea._id);
        }}
      >
        🗑
      </Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
