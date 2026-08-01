import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Navbars() {
  return (
    <div className="container">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Productos Wed</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#form-container">Agregar</Nav.Link>
            <Nav.Link href="#List">Listar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
