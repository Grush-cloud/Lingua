import { Container, Col, Row, Image } from "react-bootstrap";
import { ThreeDotsVertical, PlusCircle } from "react-bootstrap-icons";

export default function Lessons() {
  return (
    <Container className="p-2">
      <Row className="mb-2">
        <Col className="fw-bold">Lessons</Col>
        <Col className="text-muted text-end">View All</Col>
      </Row>
      {/* Lesson 1 */}
      <div className="lessons shadow p-3 mb-3">
        <Row>
          <Col>Common English</Col>
          <Col className="text-end font-title">
            <ThreeDotsVertical />
          </Col>
        </Row>
        <Row>
          <Col className="text-muted font-subtitle">Thu 13PM-15PM</Col>
        </Row>
        <Row>
          <Col className="align-items-start mt-4">
            <Image src="pfp1.jfif" roundedCircle className="lessons-pfp" />
            <Image src="pfp3.jfif" roundedCircle className="lessons-pfp" />
            <Image src="pfp2.jfif" roundedCircle className="lessons-pfp" />
          </Col>
          <Col className="text-end mt-4 me-4 font-title">
            <PlusCircle />
          </Col>
        </Row>
      </div>

      {/* Lesson 2 */}
      <div className="lessons shadow p-3">
        <Row>
          <Col>Common English</Col>
          <Col className="text-end font-title">
            <ThreeDotsVertical />
          </Col>
        </Row>
        <Row>
          <Col className="text-muted font-subtitle">Thu 13PM-15PM</Col>
        </Row>
        <Row>
          <Col className="align-items-start mt-4">
            <Image src="pfp1.jfif" roundedCircle className="lessons-pfp" />
            <Image src="pfp3.jfif" roundedCircle className="lessons-pfp" />
            <Image src="pfp2.jfif" roundedCircle className="lessons-pfp" />
          </Col>
          <Col className="text-end mt-4 me-4 font-title">
            <PlusCircle />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
