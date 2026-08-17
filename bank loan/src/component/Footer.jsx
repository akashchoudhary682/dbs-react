function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>🏦 TrustBank</h2>

          <p>
            Simple, secure and reliable loan solutions
            designed to help you achieve your financial goals.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Loans</a>
          <a href="#">EMI Calculator</a>
          <a href="#">About Us</a>
        </div>

        <div className="footer-links">
          <h3>Our Loans</h3>

          <a href="#">Personal Loan</a>
          <a href="#">Home Loan</a>
          <a href="#">Car Loan</a>
          <a href="#">Education Loan</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>📞 +91 98765 43210</p>
          <p>📧 support@trustbank.com</p>
          <p>📍 Noida, Uttar Pradesh</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TrustBank. All Rights Reserved.
        </p>

        <p>
          Privacy Policy | Terms & Conditions
        </p>
      </div>

    </footer>
  );
}

export default Footer;