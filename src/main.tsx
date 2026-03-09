import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import "../themes/V3/5ePHB/style.css";
import {
  Armor,
  Background,
  Class,
  Condition,
  Document,
  Feat,
  MagicItem,
  Monster,
  Plane,
  Race,
  Section,
  Spell,
  SpellList,
  Weapon,
} from "./components/handbook";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Container fluid>
    <React.StrictMode>
      <Row>
        <Col>
          <Monster />
        </Col>
        <Col>
          <Spell />
        </Col>
        <Col>
          <Armor />
        </Col>
        <Col>
          <SpellList />
        </Col>
        <Col>
          <Plane />
        </Col>
        <Col>
          <Race />
        </Col>
        <Col>
          <Background />
        </Col>
        <Col>
          <Class />
        </Col>
        <Col>
          <Condition />
        </Col>
        <Col>
          <Document />
        </Col>
        <Col>
          <Feat />
        </Col>
        <Col>
          <MagicItem />
        </Col>
        <Col>
          <Section />
        </Col>
        <Col>
          <Weapon />
        </Col>
      </Row>
    </React.StrictMode>
  </Container>,
);
