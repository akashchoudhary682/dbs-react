function Navbar(props) {
  return (
    <nav>
      <h2>Foodie </h2>

      <div>
        <a href="#">Home</a>

        <a href="#menu">Menu</a>

        <a href="#cart">Cart 🛒 {props.cartCount}</a>

        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;