import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ProductCard({ producto }) {
  return (
    <Card className="shadow-sm h-100" id="List">
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>

        <Card.Text>
          <strong>Cantidad:</strong> {producto.cantidad}
        </Card.Text>

        <Card.Text>
          <strong>Precio:</strong> RD$ {producto.precio}
        </Card.Text>

        <div className="d-flex justify-content-between">
          <Button variant="warning">Editar</Button>

          <Button variant="danger">Eliminar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
