import React from "react";

const Cart = ({ image, name, price, quantity }) => {
  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
      
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          {name}
        </h2>

        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Price:</span> {price}
        </p>
        <p className="text-gray-600 mt-2">
          <span className="font-semibold">Quantity:</span> {quantity}
        </p>

        
      </div>
    </div>
  );
};

export default Cart;



