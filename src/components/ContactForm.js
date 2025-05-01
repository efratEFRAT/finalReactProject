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

    // Validation for phone number
    const phoneRegex = /^[0-9]{10}$/; // Ensuring the phone number is valid
    if (!phoneRegex.test(formData.phone)) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
    setIsFormSubmitted(true);

    // Clear form after submission (optional)
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
        <div className="form-group">
          <label htmlFor="name">שם מלא</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">פרטי הפנייה</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="eventType">סוג האירוע</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">בחר סוג אירוע</option>
            <option value="personal">אירוע פרטי</option>
            <option value="business">אירוע עיסקי</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">שלח</button>
      </form>

      {isFormSubmitted && (
        <div className="success-message">
          <p>תודה על פנייתכם! ניצור קשר בהקדם.</p>
        </div>
      )}
    </div>
  );
}
