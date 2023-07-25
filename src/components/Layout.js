import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import FooterMdb from "./FooterMdb";

export default function Layout() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col sm>
          <Header />
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}
