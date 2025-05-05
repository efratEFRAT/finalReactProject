
import { useState } from "react";
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    eventType: "",
  });

  const [phoneError, setPhoneError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
    setIsFormSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      eventType: "",
    });
  };

  return (
    <div className="contact-form-container">
      <h2>צרו קשר</h2>
      <p>נשמח לשמוע מכם!</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">שם מלא</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="הכנס את שמך"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">נייד</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="0501234567"
            />
            {phoneError && <p className="error-text">מספר נייד לא תקין</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">אימייל</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message">פרטי הפנייה</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="כאן ניתן לפרט על סוג האירוע או כל בקשה נוספת"
          />
        </div>

        <div className="form-footer">
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="eventType"
                value="personal"
                checked={formData.eventType === "personal"}
                onChange={handleChange}
              />
              אירוע פרטי
            </label>
            <label>
              <input
                type="radio"
                name="eventType"
                value="business"
                checked={formData.eventType === "business"}
                onChange={handleChange}
              />
              אירוע עיסקי
            </label>
          </div>

          <button type="submit" className="submit-btn">שלח</button>
        </div>
      </form>

      {isFormSubmitted && (
        <div className="success-message">
          <p>תודה על פנייתכם! ניצור קשר בהקדם.</p>
        </div>
      )}
    </div>
  );
}