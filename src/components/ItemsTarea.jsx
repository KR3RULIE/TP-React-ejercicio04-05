import { Button, ListGroup } from "react-bootstrap";
const ItemsTarea = ({ nombreTarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}{" "}
      <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>
        🗑
      </Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
