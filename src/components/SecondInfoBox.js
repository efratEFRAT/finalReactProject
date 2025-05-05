import React from 'react';
import { Row, Col, Image, Card } from 'react-bootstrap';
import img from '../assets/7.jpg';

export default function SecondInfoBox() {
  return (
    <Card className="mb-4 border-0">
      <Row className="g-0 align-items-stretch flex-row-reverse">
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
              מגשי ארוח חלביים
            </Card.Title>
            <div
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: 'orange',
                marginBottom: '20px',
              }}
            ></div>
            <Card.Text className="fs-5 text-start" style={{ whiteSpace: 'pre-line' }}>
              מגשי אירוח קולעים לכל הטעמים אם תנסו היום להאכיל קבוצה של 10 אנשים, סביר להניח שמהר מאוד תתייאשו.
              לכל אחד יש בקשות מיוחדות: אחד שומר על הסוכר, אחר על הדיאטה, השלישי נמנע מגלוטן, הרביעי טבעוני,
              החמישי אוכל רק פירות בצבע כתום ועוד, ועוד. מכיוון שהמנות במגשי האירוח קטנות, ניתן להזמין מגוון רחב
              של מאכלים, סגנונות וטעמים, וכך לקלוע לטעם של כל הסועדים. עבור שומרי הכשרות, חשוב כמובן לבחור קייטרינג
              שגם מתהדר בתעודת כשרות מהדרין בד"ץ. כשאתם בוחרים במגשי אירוח, אתם יכולים להיות בטוחים – אף אחד לא יישאר
              רעב וכולם ייצאו מרוצים.

              {"\n\n"}מגשי אירוח חלביים - תפריט מנצח לכל סוגי האירועים
              מנות בסגנון חלבי בישראל בדרך כלל נהוג להזמין קייטרינג חלבי או קייטרינג חלבי. במקרים רבים נבחר להזמין
              תפריט בסגנון חלבי, לדוגמה, אם הקייטרינג מיועד לשעות הבוקר ואנחנו מעוניינים שהסועדים ישבעו מאוכל מזין,
              קליל וטעים שלא יכביד עליהם בהמשך היום. מגשים בסגנון חלבי שמתאימים לשעות הבוקר יכולים להכיל מגוון מנות:
              מגשי כריכים, מגש בורקס פינוקים שמכיל את כל מה שאפשר לדמיין בשילוב מושלם; המבורגר פורטבלו קליל שמספק את
              החוויה של המבורגר מינוס הכבדות המציקה; ברוסקטות עם מגוון תוספות מגרות; מגש טורטיות עשירות במטבלים וירקות, ועוד.
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
