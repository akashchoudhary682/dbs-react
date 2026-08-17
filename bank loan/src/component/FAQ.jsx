import { useState } from "react";

const faqs = [
  {
    question: "What documents are required for a loan?",
    answer:
      "Generally, you may need identity proof, address proof, income proof and bank statements. Actual requirements may vary depending on the loan type."
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Loan approval time depends on the application and verification process. Eligible applications may receive a decision quickly."
  },
  {
    question: "Can I calculate my EMI before applying?",
    answer:
      "Yes. You can use our EMI Calculator to estimate your monthly payment before submitting your application."
  },
  {
    question: "What types of loans does TrustBank offer?",
    answer:
      "TrustBank offers Personal Loan, Home Loan, Car Loan, Education Loan and Business Loan options."
  },
  {
    question: "Can I apply for a loan online?",
    answer:
      "Yes. You can fill out the loan application form on this website and submit your basic details."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">

      <div className="faq-heading">
        <p>FAQ</p>

        <h2>Frequently Asked Questions</h2>

        <span>
          Find answers to common questions about our loan services.
        </span>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQ;