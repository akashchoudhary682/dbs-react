import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FoodCard from "./components/FoodCard";

function App() {
  const [cart, setCart] = useState([]);

  const foods = [
    {
      id: 1,
      name: "Pizza",
      description: "Cheese Pizza",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Burger",
      description: "Cheese Burger",
      price: 149,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Biryani",
      description: "Chicken Biryani",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80",
    },
  ];

  function addToCart(food) {
    setCart([...cart, food]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const totalPrice = cart.reduce(
    (total, food) => total + food.price,
    0
  );

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <Home />

      <section className="menu-section" id="menu">
        <div className="section-title">
          <span>OUR MENU</span>
          <h2>Popular Food</h2>
          <p>Choose from our most loved dishes</p>
        </div>

        <div className="food-container">
          {foods.map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              image={food.image}
              addToCart={() => addToCart(food)}
            />
          ))}
        </div>
      </section>

      <section className="cart-section" id="cart">
        <div className="cart">
          <div className="cart-heading">
            <h2>Your Cart 🛒</h2>
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">
              Your cart is empty. Add some delicious food! 🍕
            </p>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((food, index) => (
                  <div className="cart-item" key={index}>
                    <img src={food.image} alt={food.name} />

                    <div>
                      <h3>{food.name}</h3>
                      <p>₹{food.price}</p>
                    </div>

                    <button
                      onClick={() => removeFromCart(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-total">
                <p>
                  Total Items: <strong>{cart.length}</strong>
                </p>

                <p>
                  Total Price: <strong>₹{totalPrice}</strong>
                </p>

                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <footer id="footer">
        <div className="footer-content">
          <div>
            <h2>Foodie </h2>
            <p>
              Delicious food delivered fresh and fast to
              your doorstep.
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Menu</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          <div>
            <h3>Information</h3>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Refund Policy</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>📞 +91 1234567890</p>
            <p>✉️ foodie@example.com</p>
            <p>📍 India</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Foodie. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;