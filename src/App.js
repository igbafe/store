import React from "react";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Product />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
