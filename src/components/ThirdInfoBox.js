
import { Link } from 'react-router-dom';
import React from 'react';
import { Row, Col, Image, Card, Container } from 'react-bootstrap';
import img from '../assets/8.jpg';
import './ThirdInfoBox.css';

export default function ThirdInfoBox() {
  return (
    <div className="third-info-wrapper">
      <Container fluid="md" className="third-info-box">
        <Card className="border-0 bg-black text-white">
          <Row className="g-0 align-items-stretch">
            {/* תמונה מצד ימין */}
            <Col md={6}>
              <Image
                src={img}
                alt="תיאור תמונה"
                fluid
                className="info-image"
              />
            </Col>

            {/* מלל מצד שמאל */}
            <Col md={6} className="info-text-col">
              <Card.Body className="info-text-body">
                <Card.Title className="info-title">סלטים</Card.Title>
                <div className="orange-line mx-auto"></div>
                <Card.Text className="info-paragraph">
                  סלטים לאירועים הם טרנד מוביל – מגישים טעם ורעננות בצורה אסתטית ובריאה.  
                  כל סלט מביא צבע, טעם ומרקם שמשדרגים כל שולחן.<br /><br />
                  ביוטיפוד מציעה קייטרינג סלטים עשיר – מושלם לכל אירוע. בר סלטים מגוון, איכותי וטרי.
                </Card.Text>
              
                <Link to="/products" className="order-button"> להזמנה אונליין</Link>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}