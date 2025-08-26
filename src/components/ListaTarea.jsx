import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";

const ListaTarea = ({ listaTareas, setListaTareas }) => {
  return (
    <ListGroup>
      {listaTareas.map((item) => (
        <ItemsTarea key={item._id} tarea={item} setListaTareas={setListaTareas} />
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
