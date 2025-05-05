import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ff8c1a', color: 'black', padding: '2rem 0', direction: 'rtl' }}>
      <Container>
        <Row className="text-center text-md-start">
          <Col md={3} className="mb-3">
            <h5>ממליצים</h5>
            <p>דרושים</p>
            <p>צור קשר</p>
          </Col>
          <Col md={3} className="mb-3">
            <h5>הזמנות אונליין</h5>
            <p>מגשי אירוח</p>
            <p>תפריטים מומלצים</p>
            <p>קיטרינג דלים</p>
            <p>סרטוני וידאו</p>
            <p>תעודות</p>
            <p>תקנון</p>
          </Col>
          <Col md={3} className="mb-3">
            <h5>קישורים נוספים</h5>
            <p>עמוד הבית</p>
            <p>אודותינו</p>
            <p>אזורי שירות</p>
            <p>האירועים שלנו</p>
            <p>שאלות ותשובות</p>
          </Col>
          <Col md={3}>
            <h5>פרטי התקשרות</h5>
            <p>שביל המרץ 1, תל אביב</p>
            <p>טלפון: 03-5601132 | פקס: 03-5600074</p>
            <p>שעות פעילות: א'-ה' 07:45–17:00 | ו' 08:00–11:00</p>
            <p>דוא"ל: info@delis.co.il</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <small>© 2025 כל הזכויות שמורות</small>
        </div>
      </Container>
    </footer>
  );
}
