import { Container, Col, Row, Image } from "react-bootstrap";
import { Search, Bell } from "react-bootstrap-icons";

export default function Profile() {
  return (
    <Container className="justify-content-center p-2">
      <Row className="align-items-center">
        <Col lg={1}>
          {/* Search icon */}
          <Search />
        </Col>
        <Col lg={2}>
          {/* Bell icon */}
          <Bell />
        </Col>
        <Col className="text-end">
          <p className="mb-0 mt-1 fw-bold">John Mason</p>
          <p className="text-muted">randomemail@gmail.com</p>
        </Col>
        <Col>
          {/* Profile picture */}
          <Image src="pfp5.jfif" roundedCircle className="profile-pfp" />
        </Col>
      </Row>
    </Container>
  );
}
