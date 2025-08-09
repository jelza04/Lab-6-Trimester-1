import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Dori Hastkala</h1>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-emerald-500 cursor-pointer">Home</li>
        <li className="hover:text-emerald-500 cursor-pointer">Products</li>
        <li className="hover:text-emerald-500 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
