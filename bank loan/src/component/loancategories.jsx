const loans = [
  {
    icon: "💰",
    title: "Personal Loan",
    description: "Fulfill your personal needs with a quick and flexible loan.",
    rate: "Starting from 10.5%"
  },
  {
    icon: "🏠",
    title: "Home Loan",
    description: "Turn your dream home into reality with easy financing.",
    rate: "Starting from 8.5%"
  },
  {
    icon: "🚗",
    title: "Car Loan",
    description: "Drive your dream car with affordable monthly payments.",
    rate: "Starting from 9.0%"
  },
  {
    icon: "🎓",
    title: "Education Loan",
    description: "Invest in your future with financial support for education.",
    rate: "Starting from 7.5%"
  }
];

function Loancategories() {
  return (
    <section className="loans-section">

      <div className="section-heading">
        <p>OUR LOAN PRODUCTS</p>

        <h2>Choose The Right Loan For You</h2>

        <span>
          Flexible loan solutions designed to meet your financial needs.
        </span>
      </div>

      <div className="loan-container">

        {loans.map((loan, index) => (
          <div className="loan-card" key={index}>

            <div className="loan-icon">
              {loan.icon}
            </div>

            <h3>{loan.title}</h3>

            <p>{loan.description}</p>

            <strong>{loan.rate}</strong>

            <button>View Details →</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Loancategories;