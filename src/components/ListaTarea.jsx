import ListGroup from "react-bootstrap/ListGroup";
import ItemsTarea from "./ItemsTarea";
const ListaTarea = ({ tareas }) => {
  return (
    <ListGroup>
      {tareas.map((item, indice) => (
        <ItemsTarea key={indice} nombreTarea={item}/>
      ))}
    </ListGroup>
  );
};

export default ListaTarea;
