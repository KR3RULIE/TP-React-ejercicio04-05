import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";

const ListaTarea = ({ listaTareas, borrarTarea }) => {
  return (
    <ListGroup>
      {listaTareas.map((item) => (
        <ItemsTarea key={item._id} borrarTarea={borrarTarea} tarea={item} />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
