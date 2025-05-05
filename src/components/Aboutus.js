import React from 'react';
import aboutImage from '../assets/logo.png';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Aboutus() {
  const orangeStyle = { color: '#ff8c1a' };

  return (
    <Container className="py-5 text-white" style={{ direction: 'rtl', textAlign: 'right' }}>
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image src={aboutImage} alt="דליס מגשי אירוח" fluid rounded />
        </Col>
        <Col md={6}>
          <h2 className="mb-4 fw-bold" style={orangeStyle}>אודותינו</h2>
          <p>
            קייטרינג "דליס – מגשי אירוח", רמה אחת מעל כולם!<br />
            קייטרינג "דליס- מגשי אירוח" הוא סיפור הצלחה של סנדביצ'ייה קטנה שגדלה והפכה לחברת קייטרינג מובילה.
            יש לנו למעלה מ-6,000 לקוחות קבועים שמזמינים אותנו שוב ושוב לאירועים עסקיים, משפחתיים, הרמות כוסית ועוד.
            הסוד שלנו: אדיבות, התחדשות והקפדה על אוכל טעים וטרי.
          </p>
          <p><strong>המוטו שלנו:</strong> מה שלא ניתן ליקרים לנו, לא ניתן גם ללקוחות שלנו.</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4 className="fw-semibold" style={orangeStyle}>יש מגשי אירוח ויש את דליס!</h4>
          <p>
            כבר ב-1997 היינו הראשונים לזהות את הטרנד והביקוש למגשי אירוח. מאז, אנו מתחדשים, יוצאים לתערוכות ברחבי העולם,
            ומביאים רעיונות חדשניים בטעמים, עיצובים ואריזות.
          </p>
          <p>
            כל מגש נבנה עם מחשבה – טעמים, עיצוב, אריזה – המנות מרשימות, הריחות משכרים והטעמים בלתי נשכחים.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4 className="fw-semibold" style={orangeStyle}>הטרנד של קייטרינג חלבי</h4>
          <p>
            המטבח החלבי כובש את העולם, וגם את ישראל. בדליס אנו שואבים השראה מהמטבחים הצרפתי, האיטלקי והעולמי,
            ומביאים קייטרינג חלבי איכותי, גורמה וקינוחים מהממים!
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4 className="fw-semibold" style={orangeStyle}>הניסיון, האמינות והמקצועיות – זה כל ההבדל!</h4>
          <p>
            אנו מגיעים לכל אירוע, בכל הארץ, עם צוות מיומן ומלצרים אדיבים. אנו מעצבים, מקימים עמדות אספרסו,
            ומציעים מערך משלוחים מהיר. יועצי האירועים יתאימו תפריט אישי.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h4 className="fw-semibold" style={orangeStyle}>מידע נוסף</h4>
          <ul>
            <li>לחמים נאפים כל בוקר בקונדיטוריה הביתית של דליס</li>
            <li>פירות וירקות טריים נחתכים סמוך להגשה</li>
            <li>אישור משרד הבריאות ורישיון יצרן: 70017</li>
            <li>כשר מהדרין בד"צ בית יוסף</li>
            <li>מרכז הזמנות ארצי: 03-5600274</li>
            <li>מייל: info@delis.co.il</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
