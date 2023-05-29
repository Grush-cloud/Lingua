import { Row, Col, Container } from "react-bootstrap";

export default function LessonMedia({ lessons }) {
  const Lessons = lessons.map((lesson) => {
    return (
      // Individual Lesson
      <Row
        key={lesson.subject}
        className="p-2 mb-2 border border-light shadow ms-0 text-center"
      >
        {/* Lesson Grade */}
        <Col
          lg={1}
          className="bg-primary d-flex align-items-center justify-content-center"
        >
          <p className="mt-2 grade">A1</p>
        </Col>
        {/* Lesson Subject */}
        <Col
          lg={3}
          className="d-flex align-items-center justify-content-center"
        >
          <p className="m-0 fw-bold">{lesson.subject}</p>
        </Col>
        {/* Lesson File */}
        <Col
          lg={3}
          className="p-0 d-flex align-items-center justify-content-center"
        >
          <p className="m-0">{lesson.file}</p>
        </Col>
        {/* Lesson Status */}
        <Col className="d-flex align-items-center justify-content-center">
          <p className="m-0 fw-bold">{lesson.status}</p>
        </Col>
        {/* Lesson Members */}
        <Col className="p-0 d-flex align-items-center justify-content-center">
          <p className="m-0">{lesson.members} members</p>
        </Col>
        {/* Lesson Size */}
        <Col className="p-0 d-flex align-items-center justify-content-center">
          <p className="m-0 fw-bold">{lesson.size} MB</p>
        </Col>
      </Row>
    );
  });

  return (
    <Container className="lesson-media-container p-0">
      <Row>
        {/* Title */}
        <Col className="fw-bold">
          <h5>Media Lessons</h5>
        </Col>
        {/* View All */}
        <Col className="text-end text-muted">View All</Col>
      </Row>
      {/* List of Lessons */}
      {Lessons}
    </Container>
  );
}
