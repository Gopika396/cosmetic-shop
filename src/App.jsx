
import { useEffect, useState } from "react";
import { Link, NavLink, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Products from "./components/Products";
import SkinType from "./components/SkinType";
import Cart from "./components/Cart";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.AOS) window.AOS.refresh();
  }, [location.pathname]);

  function addToCart(product) {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(id, amount) {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((previous) => previous.filter((item) => item.id !== id));
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="navbar navbar-expand-lg aura-navbar sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Skin<span>Aura.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#auraNav"
            aria-controls="auraNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="auraNav">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/products">Shop</NavLink>
              <NavLink className="nav-link" to="/skin-types">Skin Types</NavLink>
              <NavLink className="nav-link" to="/about">Our Story</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              <NavLink className="nav-link" to="/cart">
                <i className="bi bi-bag" /> Cart
                <span className="aura-count">{cartCount}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/skin-types" element={<SkinType />} />
          <Route path="/cart" element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home addToCart={addToCart} />} />
        </Routes>
      </main>

      <footer className="aura-footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5">
              <Link to="/" className="aura-footer-brand">SkinAura.</Link>
              <p>Skincare for every skin story.</p>
              <div className="aura-socials">
                <a href="https://www.instagram.com/" aria-label="Instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="https://www.facebook.com/" aria-label="Facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="https://www.pinterest.com/" aria-label="Pinterest">
                  <i className="bi bi-pinterest" />
                </a>
              </div>
            </div>

            <div className="col-6 col-lg-3">
              <h5>Discover</h5>
              <Link to="/">Home</Link>
              <Link to="/products">All products</Link>
              <Link to="/skin-types">Skin type guide</Link>
            </div>

            <div className="col-6 col-lg-4">
              <h5>Customer Care</h5>
              <Link to="/about">About SkinAura</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/cart">Shopping bag</Link>
            </div>
          </div>

          <div className="aura-footer-bottom">
            © 2026 SkinAura. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
