
import { Link } from "react-router-dom";

import hero from "../assets/image/hero.jpg";
import cleanser from "../assets/image/cleanser.jpg";
import serum from "../assets/image/serum.jpg";
import moisturizer from "../assets/image/moisturizer.jpg";
import sunscreen from "../assets/image/sunscreen.jpg";

const featured = [
  { id: 1, name: "Gentle Gel Cleanser", price: 399, image: cleanser, tag: "DAILY CLEANSE" },
  { id: 3, name: "Hyaluronic Serum", price: 699, image: serum, tag: "DRY SKIN" },
  { id: 4, name: "Oil Control Moisturizer", price: 499, image: moisturizer, tag: "OILY SKIN" },
  { id: 5, name: "Hydrating Sunscreen SPF 50", price: 549, image: sunscreen, tag: "SUN PROTECTION" },
];

export default function Home({ addToCart }) {
  return (
    <>
      <section className="aura-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="aura-eyebrow">SKINCARE, YOUR WAY</span>
              <h1>Your skin.<br /><em>Your kind of glow.</em></h1>
              <p>
                Discover skincare made for your skin type,
                your routine, and your everyday moments.
              </p>
              <Link to="/products" className="aura-button">
                Find your skincare <i className="bi bi-arrow-up-right" />
              </Link>
              <div className="aura-hero-note">
                <i className="bi bi-flower2" />
                Find the care that feels right for you
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <div className="aura-hero-image">
                <img src={hero} alt="SkinAura skincare collection" />
                <div className="aura-hero-card">
                  <span>YOUR SKIN</span>
                  <strong>Your story.</strong>
                  <span>YOUR ROUTINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aura-types">
        <div className="container">
          <div className="aura-section-heading" data-aos="fade-up">
            <span className="aura-eyebrow">CARE THAT FITS YOU</span>
            <h2>What's your skin <em>story?</em></h2>
          </div>

          <div className="row g-3">
            {[
              ["bi-droplet", "Oily Skin", "Lightweight care"],
              ["bi-cloud", "Dry Skin", "Deep hydration"],
              ["bi-stars", "Combination", "Balanced care"],
              ["bi-heart", "Sensitive", "Gentle essentials"],
            ].map(([icon, title, description], index) => (
              <div className="col-6 col-lg-3" key={title}
                data-aos="fade-up" data-aos-delay={index * 100}>
                <Link to="/skin-types" className="aura-type-card">
                  <i className={`bi ${icon}`} />
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <span>Explore <i className="bi bi-arrow-up-right" /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aura-section container">
        <div className="aura-section-heading" data-aos="fade-up">
          <span className="aura-eyebrow">THE SKINAURA EDIT</span>
          <h2>Meet your new <em>favourites.</em></h2>
          <p>Explore skincare essentials for different skin needs.</p>
        </div>

        <div className="row g-4">
          {featured.map((product, index) => (
            <div className="col-sm-6 col-lg-3" key={product.id}
              data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="aura-product-card">
                <div className="aura-product-image">
                  <img src={product.image} alt={product.name} />
                  <span>{product.tag}</span>
                </div>
                <div className="aura-product-info">
                  <h5>{product.name}</h5>
                  <div className="aura-product-bottom">
                    <strong>₹{product.price}</strong>
                    <button onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}>
                      <i className="bi bi-plus-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/products" className="aura-button">Shop all skincare</Link>
        </div>
      </section>

      <section className="aura-discover">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-right">
              <span className="aura-eyebrow">A LITTLE SKIN KNOW-HOW</span>
              <h2>Get to know your skin <em>better.</em></h2>
              <p>
                Explore collections for oily, dry, combination,
                normal, and sensitive skin.
              </p>
              <Link to="/skin-types" className="aura-button">
                Explore the skin guide
              </Link>
            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <img src={serum} alt="SkinAura serum" className="aura-discover-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
