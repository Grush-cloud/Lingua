import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
export default function DatePicker() {
  const [date, setDate] = useState(new Date());
  return (
    <Container>
      <Row>
        <Col>
          <Calendar onChange={setDate} value={date} selectRange={true} />
        </Col>
      </Row>
    </Container>
  );
}
