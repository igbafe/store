import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">My Store</div>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white mx-4"
                : "text-gray-300 hover:text-white mx-4"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-white mx-4"
                : "text-gray-300 hover:text-white mx-4"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-white mx-4"
                : "text-gray-300 hover:text-white mx-4"
            }
          >
            My Bag ({cartProducts.length})
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
