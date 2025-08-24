import { Button, ListGroup } from "react-bootstrap";
const ItemsTarea = ({ borrarTarea, tarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {tarea.tarea}
      <Button variant="danger" onClick={() => borrarTarea(tarea._id)}>
        🗑
      </Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
