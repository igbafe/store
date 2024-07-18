import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/CartSlice";
import { getProducts } from "./store/ProductSLice";
import StatusCode from "./utils/StatusCode";

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => setProducts(data));
  }, []);

  if (status === StatusCode.LOADING) {
    return (
      <p className="text-center text-gray-500 text-xl mt-8">Loading.....</p>
    );
  }

  if (status === StatusCode.ERROR) {
    return (
      <p className="text-center text-red-500 text-xl mt-8">
        Something went wrong! Please try again later
      </p>
    );
  }
  const addToCart = (product) => {
    dispatch(add(product));
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
          onClick={() => addToCart(product)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center mb-8">Product Listing</h1>
        <div className="flex flex-wrap justify-center">{card}</div>
      </div>
    </div>
  );
}

export default Product;
