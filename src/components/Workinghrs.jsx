import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DualProgressBar = () => {
  const workDone = 64;
  const workProgress = 20;
  const overallProgress = workDone + workProgress;

  return (
    <Container className="p-3 border border-light shadow">
      <Row>
        <Col lg={7}>
          {/* Title */}
          <p className="font.subtitle">Working Hours</p>
        </Col>
        <Col>
          {/* Date */}
          <p className="text-end">Today</p>
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          {/* Dual progress bar */}
          <CircularProgressbar
            value={overallProgress}
            text={`${overallProgress}%`}
            strokeWidth={10}
            styles={buildStyles({
              strokeLinecap: "round",
              pathColor: `linear-gradient(to right, blue ${workDone}%, yellow ${overallProgress}%)`,
              textColor: "#333",
              trailColor: "#d6d6d6",
            })}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Progress label */}
          <p>Progress</p>
        </Col>
        <Col>
          {/* Done label */}
          <p className="text-end">Done</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DualProgressBar;
