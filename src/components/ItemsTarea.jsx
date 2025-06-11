import { Button, ListGroup } from "react-bootstrap";
const ItemsTarea = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      Tarea 1 <Button variant="danger">🗑</Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
