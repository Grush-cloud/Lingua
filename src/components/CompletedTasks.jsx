import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

export default function CompletedTasks() {
  return (
    <Container className="p-0">
      <Row className="mb-2">
        <Col className="fw-bold">CompletedTasks</Col>
        <Col className="text-end">View all</Col>
      </Row>
      {/* First Completed Task */}
      <Row className="ms-2 mb-2 p-1">
        <Container className="font-subtitle border border-light shadow p-0">
          <Row>
            {/* Task Icon */}
            <Col
              lg={2}
              className="ms-3 d-flex align-items-center justify-content-center"
            >
              <p className="mt-2 bg-primary p-3">A1</p>
            </Col>
            {/* Task Details */}
            <Col lg={8}>
              <p className="m-0 mt-3 fw-bold">English-Grammar Test</p>
              <p>Eulla Kelley, 6 May</p>
            </Col>
            {/* Arrow Icon */}
            <Col className="align-self-center">
              <ArrowRight />
            </Col>
          </Row>
        </Container>
      </Row>
      {/* Second Completed Task */}
      <Row className="ms-2 mb-2 p-1">
        <Container className="font-subtitle border border-light shadow p-0">
          <Row>
            {/* Task Icon */}
            <Col
              lg={2}
              className="ms-3 d-flex align-items-center justify-content-center"
            >
              <p className="mt-2 bg-primary p-3">A1</p>
            </Col>
            {/* Task Details */}
            <Col lg={8}>
              <p className="m-0 mt-3 fw-bold">English-Grammar Test</p>
              <p>Eulla Kelley, 6 May</p>
            </Col>
            {/* Arrow Icon */}
            <Col className="align-self-center">
              <ArrowRight />
            </Col>
          </Row>
        </Container>
      </Row>
      {/* Third Completed Task */}
      <Row className="ms-2 mb-2 p-1">
        <Container className="font-subtitle border border-light shadow p-0">
          <Row>
            {/* Task Icon */}
            <Col
              lg={2}
              className="ms-3 d-flex align-items-center justify-content-center"
            >
              <p className="mt-2 bg-primary p-3">A1</p>
            </Col>
            {/* Task Details */}
            <Col lg={8}>
              <p className="m-0 mt-3 fw-bold">English-Grammar Test</p>
              <p>Eulla Kelley, 6 May</p>
            </Col>
            {/* Arrow Icon */}
            <Col className="align-self-center">
              <ArrowRight />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
