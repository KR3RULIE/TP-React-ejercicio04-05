import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";
const ListaTarea = ({ tareas, borrarTarea }) => {
  return (
    <ListGroup>
      {tareas.map((item, indice) => (
        <ItemsTarea key={indice} nombreTarea={item} borrarTarea={borrarTarea} />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
