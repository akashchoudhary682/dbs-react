import { useState } from "react";

function ApplyLoan() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    loanType: "Personal Loan",
    amount: "",
    income: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    console.log(formData);
  };

  return (
    <section className="apply-section">

      <div className="apply-heading">
        <p>LOAN APPLICATION</p>

        <h2>Apply For Your Loan</h2>

        <span>
          Fill in your details and take the first step towards your financial goal.
        </span>
      </div>

      <div className="apply-container">

        <form className="loan-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mobile Number</label>

            <input
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Loan Type</label>

            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
            >
              <option>Personal Loan</option>
              <option>Home Loan</option>
              <option>Car Loan</option>
              <option>Education Loan</option>
              <option>Business Loan</option>
            </select>
          </div>

          <div className="form-group">
            <label>Loan Amount</label>

            <input
              type="number"
              name="amount"
              placeholder="Enter loan amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Monthly Income</label>

            <input
              type="number"
              name="income"
              placeholder="Enter monthly income"
              value={formData.income}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>

          {submitted && (
            <div className="success-message">
              ✅ Your loan application has been submitted successfully!
            </div>
          )}

        </form>

      </div>

    </section>
  );
}

export default ApplyLoan;