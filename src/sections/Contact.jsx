import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// ─────────────────────────────────────────────────────────────
//  🔑  TUMHARE EMAILJS IDs — YAHI WALE USE KARO
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_sewgtxf';
const EMAILJS_TEMPLATE_ID = 'template_zxjeqvp';
const EMAILJS_PUBLIC_KEY  = 'LgJvRXiMjHl5kiiTT';
// ─────────────────────────────────────────────────────────────

const initialForm = { name: '', email: '', message: '' };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim())
    errors.name = 'Name is required.';
  if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
    errors.email = 'Please enter a valid email.';
  if (form.message.trim().length < 10)
    errors.message = 'Message must be at least 10 characters.';
  return errors;
};

const Contact = () => {
  const formRef              = useRef(null);
  const [form,    setForm]   = useState(initialForm);
  const [errors,  setErrors] = useState({});
  const [sent,    setSent]   = useState(false);
  const [loading, setLoading]= useState(false);
  const [failed,  setFailed] = useState(false);
  const [errMsg,  setErrMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (failed) setFailed(false);
  };

  const handleSubmit = () => {
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setLoading(true);
    setFailed(false);
    setErrMsg('');

    // @emailjs/browser — sendForm uses actual <form> ref OR send() uses plain object
    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message:    form.message,
        reply_to:   form.email,
      },
      EMAILJS_PUBLIC_KEY          // ← new package expects key as 4th arg here
    )
    .then(() => {
      setLoading(false);
      setSent(true);
      setForm(initialForm);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setLoading(false);
      setFailed(true);
      setErrMsg(error?.text || error?.message || 'Unknown error. Check console.');
    });
  };

  return (
    <section id="contact" className="section-wrap contact-section">
      <div className="section-label">// 05. contact</div>
      <h2 className="section-title">Get In <em>Touch</em></h2>
      <div className="divider" />

      <div className="contact-wrap">

        {/* ── Left: Info ── */}
        <div className="contact-info reveal">
          <p>
            I'm currently open to new opportunities. Whether you have a project
            in mind, a question, or just want to say hello — my inbox is always open!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>darthtiw1722@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>India</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">⚡</span>
              <span>Usually replies within 24 hours</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/dharthtiw2207" className="social-btn" target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/dharth-tiwari/" className="social-btn" target="_blank" rel="noreferrer">
              <LinkedinIcon /> LinkedIn
            </a>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="contact-form reveal" style={{ transitionDelay: '0.15s' }}>

          {sent ? (
            <div className="form-success">
              <span className="success-icon">✓</span>
              <div>
                <strong>Message Sent Successfully!</strong>
                <p>Thanks for reaching out. I'll get back to you within 24 hours!</p>
              </div>
            </div>
          ) : (
            <div ref={formRef}>
              {failed && (
                <div className="form-failed">
                  <strong>❌ Error:</strong> {errMsg || 'EmailJS template variables check karo — neeche steps dekho.'}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name"
                  placeholder="Your Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'input-error' : ''}
                  disabled={loading}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'input-error' : ''}
                  disabled={loading}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message" rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'input-error' : ''}
                  disabled={loading}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              <button
                className={`btn-primary submit-btn ${loading ? 'loading' : ''}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading
                  ? <span className="btn-loading"><span className="spinner" /> Sending...</span>
                  : 'Send Message →'
                }
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const GithubIcon = () => (
  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default Contact;
