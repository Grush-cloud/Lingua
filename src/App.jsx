import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import WelcomeCard from "./components/WelcomeCard";
import Students from "./components/Students";
import Workinghrs from "./components/Workinghrs";
import LessonMedia from "./components/LessonMedia";
import Profile from "./components/Profile";
import Date from "./components/Date";
import Lessons from "./components/Lessons";
import CompletedTasks from "./components/CompletedTasks";
import studentDetails from "./students.json";
import lessonDetails from "./lessons.json";
import NavigationBar from "./components/Navbar";

function App() {
  const [lessons, setLessons] = useState(lessonDetails);
  const [students, setStudents] = useState(studentDetails);

  return (
    <>
      <Container className="m-0 border border-light shadow">
        <Row>
          <Col lg={2}>
            {/* Navigation Bar */}
            <NavigationBar />
          </Col>
          <Col lg={6}>
            <Row className="mb-4">
              <Col>
                {/* Welcome Card */}
                <WelcomeCard />
              </Col>
            </Row>
            <Row className="mb-4">
              <Col lg={7}>
                {/* Students Component */}
                <Students students={studentDetails} />
              </Col>
              <Col>
                {/* Working Hours Component */}
                <Workinghrs />
              </Col>
            </Row>
            <Row>
              <Col>
                {/* Lesson Media Component */}
                <LessonMedia lessons={lessonDetails} />
              </Col>
            </Row>
          </Col>
          <Col className="ms-4">
            <Row>
              <Col>
                {/* Profile Component */}
                <Profile />
              </Col>
            </Row>
            <Row className="mb-1">
              <Col className="ms-3">
                {/* Date Component */}
                <Date />
              </Col>
            </Row>
            <Row className="ms-2 mb-0">
              <Col>
                {/* Lessons Component */}
                <Lessons />
              </Col>
            </Row>
            <Row className="p-4">
              <Col>
                {/* Completed Tasks Component */}
                <CompletedTasks />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
