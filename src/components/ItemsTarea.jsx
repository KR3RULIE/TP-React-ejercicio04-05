import { Button, ListGroup } from "react-bootstrap";
const ItemsTarea = ({ nombreTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea} <Button variant="danger">🗑</Button>
    </ListGroup.Item>
  );
};

export default ItemsTarea;
