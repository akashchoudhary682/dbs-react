const features = [
  {
    icon: "🔒",
    title: "100% Secure",
    description:
      "Your personal and financial information is protected with advanced security."
  },
  {
    icon: "⚡",
    title: "Quick Approval",
    description:
      "Get your loan application reviewed and approved through a simple process."
  },
  {
    icon: "💰",
    title: "Low Interest Rates",
    description:
      "Choose flexible loan plans with competitive interest rates."
  },
  {
    icon: "🤝",
    title: "Trusted Support",
    description:
      "Our support team is always ready to help you with your loan journey."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-section">

      <div className="why-heading">
        <p>WHY TRUSTBANK?</p>

        <h2>Banking Made Simple & Secure</h2>

        <span>
          We make borrowing simple, transparent and convenient.
        </span>
      </div>

      <div className="features-container">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;