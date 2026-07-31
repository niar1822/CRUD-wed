import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  return (
    <div className="container" id="navbar">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Productos Wed</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Agregar</Nav.Link>
            <Nav.Link href="#features">Listar</Nav.Link>
            <Nav.Link href="#pricing">Eliminar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
