import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";

const ListaTarea = ({ listaTareas}) => {
  return (
    <ListGroup>
      {listaTareas.map((item) => (
        <ItemsTarea key={item._id} tarea={item} />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
