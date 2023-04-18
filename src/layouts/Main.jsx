import React from "react";
import Header from "../pages/Home/Home/Shared/Header";
import Footer from "../pages/Home/Home/Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col sm={8}>sm=8</Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
