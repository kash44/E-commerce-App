import ProductList from "./Pages/ProductList/ProductList";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Cart from "./Pages/Cart/Cart";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={user ? <Navigate  to="/" /> : <Login />} /> 

        <Route path="/register" element={user ? <Navigate  to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
