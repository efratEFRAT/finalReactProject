import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const initialRecommendations = [

    {
      name: "יעל לוי",
      position: "מנהלת רווחה, הייטק גלובל",
      quote: "האוכל היה מדהים, ההגשה מוקפדת, והשירות – יוצא דופן. כל העובדים שאלו מאיפה הקייטרינג!",
    },
    {
      name: "אבי כהן",
      position: "מנכ\"ל חברת בנייה",
      quote: "מגשי האירוח של ביוטיפוד עושים כבוד בכל ישיבה – טריים, טעימים ומרשימים במיוחד.",
    },
    {
      name: "רחל פרץ",
      position: "חוגגת בת מצווה",
      quote: "אין דברים כאלה! קינוחים מהאגדות, והכול הגיע בזמן, מסודר וטעים ברמות.",
    },
    {
      name: "איתן גבאי",
      position: "מפיק אירועים",
      quote: "אני ממליץ על ביוטיפוד לכל לקוח. הם תמיד זמינים, תמיד מדויקים, והכי חשוב – טעימים!",
    },
    
    {
      name: "אפרת מרקוביץ",
      quote: "נהניתי ברמות מהשרות ואמאלה היה טעים החברה לקחו את המספר והתקשרו למחרת לספר שהיה מטורף",
    }
    ,
    
    {
      name: "מוריה אדר",
      quote: "הייתי לחוצה מהארוע של ביתי שחגגה בת מצווה ונרגעתי כל כך התקשורת הייתה מדהימה ענתה לי נציגה מדהימה דיברה ברוגע ושלחה לי תמונות כך שהגעתי לארוע רגועהה",
    }
    ,
    
    {
      name: "הילה לביא",
      quote: "היה אחד הארועים אין על ביוטיפוד!!",
    }
    ,
    
    {
      name: "איתמר שבו",
     quote: "ערכתי ארוע לצוות שלי והיה מושלם האוכל טעים ואסטתי וכולם היו מרוצים ברור שנחזור ונזמין!!",
    }
    ,
    
    {
      name: "יוחנן אליה",
      quote: "טרוף של קייטרינג תודה על הכל!!!",
    }
    ,
    
    {
      name: "מיכל שובב",
      quote: "איזה אוכלל ואלה ואני עוד מרוקאית יש לי חתכ'ת רף תשמעו לכו על זה לא ממליצה כל יום",
    }
    ,
    
    {
      name: "דנית ",
      quote: " ! טעים טעים מומלץץץץ הזמנתי ליציאה זוגית סלמון נדיר וסלט חשבנו שלא נשתלט בחיים אבל כן חוסלל!!!",
    }
    ,
    
    {
      name: "ברכה כהנא",
      quote: "אחלה קיטרינג!! מומלץ",
    }
    ,
    
    {
      name: "אפי לרנר",
      quote: "וואו היה ארוע של החיים לבת שלי אין נהננו היה מקסים אוכל נדיר אסתטיקה ברמה אחרת וואו כולם החמיאו לנו היה פשוט פיצוץ אוהבים את ביוטיפודד!!",
    }
    
  ];
export default function Recommendations() {
  const [recommendations, setRecommendations] = useState(initialRecommendations);
  const [newRec, setNewRec] = useState({ name: '', quote: '', position: '' });
  const handleAdd = () => {
    if (newRec.name && newRec.quote) {
      setRecommendations([...recommendations, newRec]);
      setNewRec({ name: '', quote: '', position: '' });
    }
  };

  return (
    <Container className="py-5 text-white" style={{ direction: 'rtl', textAlign: 'right' }}>
      <h2 className="text-center mb-5 fw-bold" style={{ color: '#ff8c4a' }}>לקוחות ממליצים</h2>
      <Row>
        {recommendations.map((rec, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-lg border-0 bg-dark text-white rounded-4">
              <Card.Body>
                <Card.Text style={{ fontStyle: 'italic' }}>
                  “{rec.quote}”
                </Card.Text>
                <hr style={{ borderColor: '#ff8c4a' }} />
                <Card.Title className="mb-0" style={{ color: '#ff8c1a' }}>{rec.name}</Card.Title>
                {rec.position && <Card.Subtitle className="text-muted">{rec.position}</Card.Subtitle>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <hr className="my-5" />
      <h4 className="mb-3">הוסף המלצה חדשה</h4>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Control
              placeholder="שם"
              value={newRec.name}
              onChange={(e) => setNewRec({ ...newRec, name: e.target.value })}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              placeholder="תפקיד (לא חובה)"
              value={newRec.position}
              onChange={(e) => setNewRec({ ...newRec, position: e.target.value })}
            />
          </Col>
          <Col md={4}>
            <Form.Control
              placeholder="המלצה"
              value={newRec.quote}
              onChange={(e) => setNewRec({ ...newRec, quote: e.target.value })}
            />
          </Col>
        </Row>
        <Button variant="warning" onClick={handleAdd}>הוסף המלצה</Button>
      </Form>
    </Container>
  );
}
