function Home() {
  function orderNow() {
    document
      .getElementById("menu")
      .scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-small">
           FRESH & DELICIOUS
        </span>

        <h1>
          Delicious Food
          <br />
          <span>Delivered To Your Door</span>
        </h1>

        <p>
          Order your favorite food from the comfort
          of your home. Fresh, fast and tasty!
        </p>

        <button onClick={orderNow}>
          Order Now →
        </button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85"
          alt="Delicious Pizza"
        />
      </div>
    </section>
  );
}

export default Home;