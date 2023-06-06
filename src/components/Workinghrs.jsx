import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const DualProgressBar = () => {
  const workDone = 24;
  const progress = 60;
  const percentage = workDone + progress; // Calculate the percentage of work done
  return (
    <Container className="p-3 border border-light shadow wrk-hrs">
      <Row>
        <Col lg={7}>
          {/* Title */}
          <p className="font.subtitle">Working Hours</p>
        </Col>
        <Col>
          {/* Date */}
          <DropdownButton id="dropdown-item-button" title="Today">
            <Dropdown.ItemText>Today</Dropdown.ItemText>
            <Dropdown.Item as="button">Tomorrow </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="p-4">
        <Col>
          {/* Dual progress bar */}
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={6}
            styles={buildStyles({
              textSize: "15px",
              pathColor: `rgba(62, 1, 199, ${percentage / 100})`, // Color for progress
              trailColor: "gray",
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
