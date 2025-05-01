import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import img from '../assets/8.jpg';

export default function ThirdInfoBox() {
  return (
    <Card className="mb-4 border-0">
      <Row className="g-0 align-items-stretch">
        <Col md={6}>
          <Image src={img} alt="תיאור תמונה" fluid style={{ height: '100%', objectFit: 'cover' }} />
        </Col>
        <Col md={6} className="d-flex">
          <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title className="fs-3 border-bottom pb-2 mb-3">
          סלטים
            </Card.Title>
            <Card.Text className="fs-5">
           
סלטים לאירועים - סלטים לאירועים הם טרנד לוהט לאירועים בסגנון שונה, קלים יותר וזורמים. סלטים הם עולם שלם ומגוון של טעמים. ​שום ארוחה אינה שלמה בלי סלטים בין אם אתם מזמינים קייטרינג לשעות הבוקר המוקדמות, לשעות הצהריים או דווקא לערב – אין ספק שסלטים מוכרחים להיות חלק מהתפריט. סלטים הם בריאים, מרעננים כל ארוחה ולא פחות חשוב מכך – מוסיפים גם צבע ועניין לכל סעודה. אפשר להזמין מגש עשיר של סלטים שמסודרים עליו באופן אסתטי.

סלטים לאירועים - קייטרינג סלטים מגוון ובריא
דליס מגשי אירוח מציעה מבחר רחב ומגוון של סלטים לאירועים שהופכים כל אירוע לסיפור הצלחה. מעוניינים בבר סלטים משגע לאירוע שלכם? הגעתם למקום הנכון! דליס מציעה סלטים איכותיים וטריים ללא פשרות! בחרו לאירוע שלכם את התוספת המנצחת עם סלטים מכל הסוגים וכל המינים.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
