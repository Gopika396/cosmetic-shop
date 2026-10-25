
import { Link } from "react-router-dom";

export default function Cart({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <section className="aura-section container">
      <div className="aura-section-heading" data-aos="fade-up">
        <span className="aura-eyebrow">YOUR SELECTION</span>
        <h1>Your beauty <em>bag.</em></h1>
        <p>Your selected SkinAura products.</p>
      </div>

      {cart.length === 0 ? (
        <div className="aura-empty-cart">
          <i className="bi bi-bag-heart" />
          <h3>Your bag is waiting for something lovely.</h3>
          <p>Explore the collection to find your skincare essentials.</p>
          <Link to="/products" className="aura-button">Explore skincare</Link>
        </div>
      ) : (
        <div className="row g-5">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div className="aura-cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="aura-cart-info">
                  <h5>{item.name}</h5>
                  <p>₹{item.price}</p>
                  <div className="aura-quantity">
                    <button onClick={() => updateQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                  </div>
                </div>
                <div className="aura-cart-end">
                  <strong>₹{item.price * item.quantity}</strong>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="aura-summary">
              <h4>Order summary</h4>
              <div className="aura-total-line">
                <span>Subtotal</span><strong>₹{total}</strong>
              </div>
              <div className="aura-total-line">
                <span>Delivery</span><span>At checkout</span>
              </div>
              <div className="aura-total-line aura-grand-total">
                <span>Total</span><strong>₹{total}</strong>
              </div>
              <button className="aura-button w-100"
                onClick={() => alert("Checkout is a demo feature.")}>
                Continue to checkout
              </button>
              <Link to="/products" className="aura-continue">Continue shopping</Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
