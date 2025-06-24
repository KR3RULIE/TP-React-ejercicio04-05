import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";
const ListaTarea = ({ tareas, borrarTarea }) => {
  return (
    <ListGroup>
      {borrarTarea}
      {tareas.map((item, indice) => (
        <ItemsTarea
          key={indice}
          indice={indice}
          borrarTarea={borrarTarea}
          tarea={item}
        />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
