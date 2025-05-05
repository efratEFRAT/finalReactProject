
import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import img from '../assets/7.jpg';
import './SecondInfoBox.css'; // קובץ CSS נלווה

export default function SecondInfoBox() {
  return (
    <div className="info-box-container">
      <Card className="border-0 bg-black text-white">
        <Row className="g-0 align-items-stretch">
          <Col md={6} className="order-md-1">
            <Image
              src={img}
              alt="מגשי אירוח"
              fluid
              className="info-image"
            />
          </Col>

          <Col md={6} className="d-flex">
            <Card.Body className="d-flex flex-column justify-content-center text-center px-4">
              <Card.Title className="info-title">מגשי ארוח חלביים</Card.Title>
              <div className="orange-line mx-auto"></div>
              <Card.Text className="info-text text-start">
                מגשי אירוח חלביים מתאימים לכל סוג אירוע – קלים, מגוונים ופונים לכל הטעמים.
                תפריט חלבי מבטיח מנות מזינות שמתאימות לבוקר ולצהריים.
                <br /><br />
                בין האפשרויות: כריכים, בורקסים, ברוסקטות, טורטיות ועוד – מוגשים באסתטיקה גבוהה וטריות מובטחת.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}