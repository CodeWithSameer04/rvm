import React from 'react';
import './FAQ.css';

const FAQ = () => {
  const faqData = [
    {
      question: "What makes RVM different?",
      answer: "We blend modern production techniques with a timeless approach to sound. It’s all about quality, creativity, and delivering music that truly stands out."
    },
    {
      question: "Do I need to book in advance?",
      answer: "While we may accept last-minute sessions when available, we highly recommend booking in advance to secure your preferred time and studio setup."
    },
    {
      question: "What should I expect during my session?",
      answer: "From the moment you arrive, you’ll step into a professional and comfortable space. Our team will understand your vision and guide you through a smooth, creative recording process."
    },
    {
      question: "Do you offer full music production packages?",
      answer: "Absolutely — we offer complete packages including recording, mixing, mastering, and beat production. You can choose what fits your project best."
    },
    {
      question: "What equipment do you use?",
      answer: "We use high-quality, industry-standard equipment to ensure top-tier sound quality. You’re also welcome to bring your own gear if needed."
    },
    {
      question: "Do you work with beginners or only professionals?",
      answer: "We work with artists at all levels. Whether you’re just starting out or already established, we help bring your sound to life."
    }
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-main-heading">Frequently Asked Questions</h2>
      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{item.question}</h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;