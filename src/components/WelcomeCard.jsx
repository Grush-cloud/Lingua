import { Container, Image, Row, Col } from "react-bootstrap";

export default function WelcomeCard() {
  return (
    <Container className="border border-light shadow-sm p-2 mt-4 welcome-container">
      <Row className="h-100">
        <Col>
          <Container className="p-0 align-self-center mt-5">
            {/* Welcome message */}
            <h3>
              Welcome back <span className="fw-bold">John,</span>
            </h3>
            {/* Completion message */}
            <p className="mt-4 text-title">
              Your students completed <span className="text-warning">80%</span>{" "}
              of the tasks
            </p>
            {/* Progress message */}
            <p>
              Progress is <span className="text-warning">very good!</span>
            </p>
          </Container>
        </Col>
        <Col>
          {/* Welcome image */}
          <Image src="welcomecardimg.webp" className="welcome-container-img" />
        </Col>
      </Row>
    </Container>
  );
}
