function FoodCard(props) {
  return (
    <div className="food-card">
      <div className="image-box">
        <img src={props.image} alt={props.name} />

        <span>Popular</span>
      </div>

      <div className="food-content">
        <h2>{props.name}</h2>

        <p>{props.description}</p>

        <div className="food-bottom">
          <strong>₹{props.price}</strong>

          <button onClick={props.addToCart}>
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;