import { useState } from 'react';
import { MailIcon, MapPinIcon, ShieldCheckIcon } from '../components/Icons';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="page-tag">Support &amp; Inquiries</span>
        <h1>Contact Admissions &amp; Support</h1>
        <p>
          Need assistance with enrollment, academic records, or portal technical questions? Reach out to our team below.
        </p>
      </div>

      <div className="contact-layout">
        {/* Contact Form */}
        <div className="contact-card">
          {submitted ? (
            <div className="alert-success" role="status">
              <ShieldCheckIcon size={32} />
              <h3>Message Dispatched Successfully</h3>
              <p>
                Thank you for contacting us, <strong>{formData.name}</strong>. Our academic advisory staff will respond to <em>{formData.email}</em> within 24 business hours.
              </p>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', message: '' });
                }}
                style={{ marginTop: '12px' }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Full Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. Alice Johnson"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Institutional Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="alice@university.edu"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Inquiry Message</label>
                <textarea
                  id="contact-message"
                  rows="4"
                  placeholder="Detail your question or academic inquiry..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary">
                Submit Academic Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Info Column */}
        <div className="contact-card">
          <h3>Academic Affairs Office</h3>
          <p style={{ marginTop: '8px' }}>
            Our student services team assists students and faculty Monday through Friday from 8:00 AM to 5:00 PM EST.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="info-icon">
                <MapPinIcon size={18} />
              </div>
              <div>
                <strong>Main Campus</strong>
                <p>100 Academic Boulevard, Suite 400</p>
                <p>Cambridge, MA 02138</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <MailIcon size={18} />
              </div>
              <div>
                <strong>Support Desk</strong>
                <p>admissions@studentportal.edu</p>
                <p>helpdesk@studentportal.edu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
