import { Button, ListGroup } from "react-bootstrap";
const ItemsTarea = ({ borrarTarea, indice, tarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea}
      <Button variant="danger" onClick={() => borrarTarea(indice)}>
        🗑
      </Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
