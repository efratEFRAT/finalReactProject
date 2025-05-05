


import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import img from '../assets/6.jpg';
import './FirstInfoBox.css'; 

export default function FirstInfoBox() {
  return (
    <Card className="mb-4 border-0">
      <Row className="g-0 align-items-stretch">
        {/* תמונה בצד שמאל */}
        <Col md={6}>
          <Image
            src={img}
            alt="תיאור תמונה"
            fluid
            className="info-image"
          />
        </Col>

        {/* טקסט בצד ימין */}
        <Col
          md={6}
          className="d-flex"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <Card.Body className="d-flex flex-column justify-content-center text-start px-4">
            <Card.Title className="info-title">מגשי מתוקים</Card.Title>
            <div className="orange-line mx-auto"></div>
            <Card.Text className="info-text">
              מגשי אירוח מתוקים עשויים לכלול מגוון פינוקים כמו קרואסונים, עוגות, שוקולדים, קרמבו ומקרונים צבעוניים.
              הם מסודרים בצורה אסתטית ומרשימה, מושלמים לאירועים כמו מסיבות או סופי שבוע.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
