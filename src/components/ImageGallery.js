import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import img1 from '../assets/5.jpg'; // דוגמה, תעדכן את הנתיבים אם צריך
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

export default function ImageGallery() {
  return (
    <div className="container mt-4">
      <Row>
        {/* תמונה 1 */}
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Text>מגשי פירות</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* תמונה 2 */}
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Text> קייטרינג חלבי</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* תמונה 3 */}
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Text>מגשי כריכים</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* תמונה 4 */}
        <Col md={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Text> מגשי מתוקים</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
