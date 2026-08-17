import Navbar from "./component/navbar";
import Hero from "./component/hero";
import LoanCategories from "./component/loancategories";
import EMICalculator from "./component/EMICalculator";
import WhyChooseUs from "./component/WhyChooseUs";
import ApplyLoan from "./component/ApplyLoan";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="loans">
        <LoanCategories />
      </div>

      <div id="calculator">
        <EMICalculator />
      </div>

      <WhyChooseUs />

      <div id="apply">
        <ApplyLoan />
      </div>

      <div id="faq">
        <FAQ />
      </div>

      <Footer />
      
    </div>
  );
}
export default App;