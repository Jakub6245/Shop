import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { fetchProducts } from "./services/products/fetchProducts";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  return (
    <ApiProvider api={fetchProducts}>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </ApiProvider>
  );
}

export default App;
