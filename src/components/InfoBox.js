import { Link } from 'react-router-dom';
import './InfoBox.css';

export default function InfoBox() {
  return (
    <div className="info-box my-5">
      <p className="info-title">מגשי אירוח וקייטרינג איכותי בביוטיפוד</p>
      <p className="info-description">
        מתן ייעוץ קולינרי וליווי מקצועי בבחירת התפריט והקונספט המדויק לאירוע הבא שלכם.  
        <Link to="/products" className="info-link"> לצפייה במגוון המוצרים שלנו ←</Link>
      </p>
    </div>
  );
}
