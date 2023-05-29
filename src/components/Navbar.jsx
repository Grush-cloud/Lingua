import {
  Folder2,
  House,
  GraphUp,
  Envelope,
  Clock,
  Gear,
  BoxArrowRight,
} from "react-bootstrap-icons";
import { Image, Nav, Navbar, Container } from "react-bootstrap";
export default function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" className="h-100 flex-column">
      <Navbar.Brand className="mb-5 mt-4 p-4 ">
        <Image src="Lingua.png" className="brand-logo" /> Lingua
      </Navbar.Brand>
      <Container className="p-2  h-100">
        <Nav className="flex-column  p-4 gap-4 h-100">
          <Nav.Link href="#home">
            <House className="me-2" />
            Dashboard
          </Nav.Link>
          <Nav.Link href="#features">
            <GraphUp className="me-2" />
            Analysis
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Folder2 className="me-2" />
            Documents
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Envelope className="me-2" />
            Inbox
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Clock className="me-2" />
            History
          </Nav.Link>
          <Nav.Link href="#pricing">
            <Gear className="me-2" />
            Settings
          </Nav.Link>
          <Nav.Link className=" mt-auto">
            <BoxArrowRight className="me-2" />
            Log out
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
