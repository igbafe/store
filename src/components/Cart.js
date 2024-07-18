import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./store/CartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch(); // Correct assignment

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const card = products.map((product) => (
    <div
      key={product.id}
      className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white"
    >
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-gray-800 mb-4">
          ${product.price}
        </p>
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Remove Item
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex flex-wrap justify-center">{card}</div>
    </div>
  );
}

export default Cart;
