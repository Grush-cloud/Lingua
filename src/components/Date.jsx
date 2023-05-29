import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
export default function Date() {
  return (
    <Container className="">
      <Row>
        <Col>
          <Calendar />
        </Col>
      </Row>
    </Container>
  );
}
