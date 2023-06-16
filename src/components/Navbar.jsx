import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MH Store</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#sparkling">Sparkling Wines</Nav.Link>
          <Nav.Link href="#still">Still Wines</Nav.Link>
          <Nav.Link href="#spirits">Spirits</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
