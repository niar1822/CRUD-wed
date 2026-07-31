import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  const productos = [
    {
      id: 1,
      nombre: "Laptop",
      precio: 50000,
      cantidad: 10,
    },
    {
      id: 2,
      nombre: "Mouse",
      precio: 1200,
      cantidad: 30,
    },
    {
      id: 3,
      nombre: "Teclado",
      precio: 2500,
      cantidad: 20,
    },
  ];

  return (
    <Row className="g-4 mt-3">
      {productos.map((producto) => (
        <Col md={4} key={producto.id}>
          <ProductCard producto={producto} />
        </Col>
      ))}
    </Row>
  );
}
