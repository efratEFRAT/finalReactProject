// import React from 'react';
// import { Row, Col, Image, Card } from 'react-bootstrap';
// import img from '../assets/8.jpg';

// export default function ThirdInfoBox() {
//   return (
//     <Card className="mb-4 border-0">
//       <Row className="g-0 align-items-stretch">
//         <Col md={6}>
//           <Image
//             src={img}
//             alt="תיאור תמונה"
//             fluid
//             style={{ height: '100%', objectFit: 'cover' }}
//           />
//         </Col>
//         <Col
//           md={6}
//           className="d-flex"
//           style={{ backgroundColor: '#000', color: '#fff' }}
//         >
//           <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
//             <Card.Title className="fs-3 mb-2">
//               סלטים
//             </Card.Title>
//             <div
//               style={{
//                 width: '60px',
//                 height: '4px',
//                 backgroundColor: 'orange',
//                 marginBottom: '20px',
//               }}
//             ></div>
//             <Card.Text className="fs-5 text-start" style={{ whiteSpace: 'pre-line' }}>
//               סלטים לאירועים - סלטים לאירועים הם טרנד לוהט לאירועים בסגנון שונה, קלים יותר וזורמים.
//               סלטים הם עולם שלם ומגוון של טעמים. ​שום ארוחה אינה שלמה בלי סלטים בין אם אתם מזמינים קייטרינג
//               לשעות הבוקר המוקדמות, לשעות הצהריים או דווקא לערב – אין ספק שסלטים מוכרחים להיות חלק מהתפריט.
//               סלטים הם בריאים, מרעננים כל ארוחה ולא פחות חשוב מכך – מוסיפים גם צבע ועניין לכל סעודה.
//               אפשר להזמין מגש עשיר של סלטים שמסודרים עליו באופן אסתטי.

//               {"\n\n"}סלטים לאירועים - קייטרינג סלטים מגוון ובריא
//               דליס מגשי אירוח מציעה מבחר רחב ומגוון של סלטים לאירועים שהופכים כל אירוע לסיפור הצלחה.
//               מעוניינים בבר סלטים משגע לאירוע שלכם? הגעתם למקום הנכון! דליס מציעה סלטים איכותיים וטריים ללא פשרות!
//               בחרו לאירוע שלכם את התוספת המנצחת עם סלטים מכל הסוגים וכל המינים.
//             </Card.Text>
//           </Card.Body>
//         </Col>
//       </Row>
//     </Card>
//   );
// }
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
                  דליס מציעה קייטרינג סלטים עשיר – מושלם לכל אירוע. בר סלטים מגוון, איכותי וטרי.
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