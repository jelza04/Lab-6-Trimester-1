import React from 'react';

function ProductCard({ name, price, description, image }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      {image && <img src={image} alt={name} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-blue-500 font-semibold">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;

