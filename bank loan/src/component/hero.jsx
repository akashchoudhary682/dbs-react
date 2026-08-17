function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <p className="hero-small">TRUSTBANK • SMART BANKING</p>

        <h1>
          Get The Loan You Need,
          <span> When You Need It.</span>
        </h1>

        <p className="hero-description">
          Simple, fast and secure loan solutions designed
          to help you achieve your financial goals.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Apply for Loan
          </button>

          <button className="secondary-btn">
            Calculate EMI
          </button>
        </div>
      </div>

      <div className="hero-card">
        <div className="bank-icon">🏦</div>

        <h2>Easy Loan</h2>

        <p>Quick & Secure</p>

        <div className="loan-info">
          <div>
            <strong>₹10L</strong>
            <small>Maximum Loan</small>
          </div>

          <div>
            <strong>8.5%</strong>
            <small>Starting Rate</small>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;