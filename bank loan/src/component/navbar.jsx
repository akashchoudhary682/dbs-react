function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🏦 TrustBank
      </div>

    <div className="nav-links">
     <a href="#home">Home</a>
     <a href="#loans">Loans</a>
     <a href="#calculator">Calculator</a>
     <a href="#apply">Apply Loan</a>
     <a href="#faq">FAQ</a>
    </div>

      <button className="apply-btn">
        Apply Now
      </button>
    </nav>
  );
}

export default Navbar;