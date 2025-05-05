import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import img from '../assets/6.jpg';

export default function FirstInfoBox() {
  return (
    <Card className="mb-4 border-0">
      <Row className="g-0 align-items-stretch">
        <Col md={6}>
          <Image
            src={img}
            alt="תיאור תמונה"
            fluid
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </Col>
        <Col
          md={6}
          className="d-flex"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
            <Card.Title className="fs-3 mb-2">
              מגשי מתוקים
            </Card.Title>
            <div
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: 'orange',
                marginBottom: '20px',
              }}
            ></div>
            <Card.Text className="fs-5 text-start">
              ליגה אחרת של אסתטיקה – אחד הדברים שהכי כדאי להקפיד עליהם כאשר מזמינים קייטרינג הוא האסתטיקה.
              כולם אוהבים לאכול אוכל שמסודר יפה, מצולחת טוב ונראה טרי ומגרה. כשמדובר במגשי אירוח, האסתטיקה היא
              הדבר הראשון שמבחינים בו. מנות קטנות ויפות אחת אחת, מסודרות כמו חיילים צבעוניים על מגש רחב... אולי
              בהתחלה הסועדים לא ירצו להרוס את היופי, אבל מהר מאוד התיאבון יגבר על החשש והמגשים יתחילו להתרוקן.
              וכשזה יקרה, המגש הבא ימתין כבר בתור, מסודר ויפהפה ממש כמו הקודם. מגשי אירוח מתוקים ועשירים – הכי טעים שיש!
              מגשי אירוח מתוקים כמובן, אי אפשר לסיים ארוחה ללא קינוח. מגשים מתוקים עשויים לכלול מגוון פינוקים:
              החל מקרואסונים, עוגות ופאיים עשירים ועד שוקולדים משופדים, קרמבו מקושטים ומקרונים צבעוניים.
              לסיום ארוחה בשרית, אפשר כמובן להזמין גם קינוחי פרווה עם כשרות בד"ץ מהדרין.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

