import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Students({ students }) {
  const Student = students.map((student) => {
    return (
      <Row key={student.name} className="align-items-center">
        <Col lg={2}>
          {/* Student profile picture */}
          <p className="students-pfp-wrapper d-flex justify-content-center">
            <Image src={student.pfp} roundedCircle className="students-pfp" />
          </p>
        </Col>
        <Col lg={4}>
          {/* Student name */}
          <p>{student.name}</p>
        </Col>
        <Col lg={4}>
          {/* Student progress bar */}
          <p>
            <ProgressBar
              className="progress-bars"
              now={student.progress}
              label={`${student.progress}%`}
              visuallyHidden
            />
          </p>
        </Col>
        <Col>
          {/* Student progress percentage */}
          <p>{student.progress} %</p>
        </Col>
      </Row>
    );
  });

  return (
    <Container className="students-container border border-light shadow w-100">
      <Row className="mb-2 mt-3">
        <Col>
          {/* Heading */}
          <h5 className="fw-bold">My Students</h5>
        </Col>
        <Col>
          {/* View All link */}
          <p className="text-end text-muted">View All</p>
        </Col>
      </Row>
      {Student}
    </Container>
  );
}
