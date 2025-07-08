import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Argentina Football Team</h1>
        <ul className="flex items-center">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Players
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition duration-300">
              Schedule
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;