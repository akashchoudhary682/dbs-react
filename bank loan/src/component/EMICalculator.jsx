import { useState } from "react";

function EMICalculator() {

  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {

    const principal = Number(loanAmount);
    const rate = Number(interestRate) / 12 / 100;
    const months = Number(loanTenure) * 12;

    const calculatedEMI =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    const calculatedTotalAmount = calculatedEMI * months;

    const calculatedInterest =
      calculatedTotalAmount - principal;

    setEmi(calculatedEMI);
    setTotalInterest(calculatedInterest);
    setTotalAmount(calculatedTotalAmount);
  };

  return (
    <section className="emi-section">

      <div className="emi-heading">
        <p>LOAN CALCULATOR</p>

        <h2>Calculate Your Monthly EMI</h2>

        <span>
          Find out how much you need to pay every month.
        </span>
      </div>

      <div className="emi-container">

        <div className="emi-form">

          <label>Loan Amount</label>

          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />

          <label>Interest Rate (%)</label>

          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />

          <label>Loan Tenure (Years)</label>

          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
          />

          <button onClick={calculateEMI}>
            Calculate EMI
          </button>

        </div>

        <div className="emi-result">

          <h3>Your Monthly EMI</h3>

          <h1>
            ₹{emi ? emi.toFixed(0) : "0"}
          </h1>

          <div className="result-item">
            <span>Loan Amount</span>
            <strong>₹{Number(loanAmount).toLocaleString("en-IN")}</strong>
          </div>

          <div className="result-item">
            <span>Total Interest</span>
            <strong>
              ₹{totalInterest.toFixed(0)}
            </strong>
          </div>

          <div className="result-item">
            <span>Total Payable</span>
            <strong>
              ₹{totalAmount.toFixed(0)}
            </strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default EMICalculator;