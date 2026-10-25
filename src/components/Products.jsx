
import { useState } from "react";

import cleanser from "../assets/image/cleanser.jpg";
import toner from "../assets/image/toner.jpg";
import serum from "../assets/image/serum.jpg";
import moisturizer from "../assets/image/moisturizer.jpg";
import sunscreen from "../assets/image/sunscreen.jpg";
import cleansingBalm from "../assets/image/cleansing-balm.jpg";
import nightCream from "../assets/image/night-cream.jpg";
import eyeCream from "../assets/image/eye-cream.jpg";
import clayMask from "../assets/image/clay-mask.jpg";
import vitaminC from "../assets/image/vitamin-c-serum.jpg";
import niacinamide from "../assets/image/niacinamide-serum.jpg";
import retinol from "../assets/image/retinol-cream.jpg";
import faceMist from "../assets/image/face-mist.jpg";
import scrub from "../assets/image/scrub.jpg";
import sheetMask from "../assets/image/sheet-mask.jpg";

const products = [
  { id: 1, name: "Gentle Gel Cleanser", price: 399, image: cleanser, types: ["Oily Skin", "Combination Skin", "Normal Skin"], tag: "DAILY CLEANSE" },
  { id: 2, name: "Balancing Toner", price: 449, image: toner, types: ["Oily Skin", "Combination Skin"], tag: "BALANCING CARE" },
  { id: 3, name: "Hyaluronic Serum", price: 699, image: serum, types: ["Dry Skin", "Sensitive Skin"], tag: "HYDRATION" },
  { id: 4, name: "Oil Control Moisturizer", price: 499, image: moisturizer, types: ["Oily Skin", "Combination Skin"], tag: "LIGHTWEIGHT" },
  { id: 5, name: "Hydrating Sunscreen SPF 50", price: 549, image: sunscreen, types: ["Oily Skin", "Dry Skin", "Combination Skin", "Normal Skin", "Sensitive Skin"], tag: "SUN PROTECTION" },
  { id: 6, name: "Cleansing Balm", price: 599, image: cleansingBalm, types: ["Dry Skin", "Normal Skin"], tag: "MAKEUP REMOVAL" },
  { id: 7, name: "Night Repair Cream", price: 649, image: nightCream, types: ["Dry Skin", "Normal Skin"], tag: "NIGHT CARE" },
  { id: 8, name: "Eye Cream", price: 499, image: eyeCream, types: ["Dry Skin", "Normal Skin"], tag: "EYE CARE" },
  { id: 9, name: "Purifying Clay Mask", price: 599, image: clayMask, types: ["Oily Skin", "Combination Skin"], tag: "WEEKLY CARE" },
  { id: 10, name: "Vitamin C Serum", price: 749, image: vitaminC, types: ["Normal Skin", "Combination Skin"], tag: "BRIGHTENING" },
  { id: 11, name: "Niacinamide Serum", price: 699, image: niacinamide, types: ["Oily Skin", "Combination Skin"], tag: "SKIN SUPPORT" },
  { id: 12, name: "Retinol Night Cream", price: 799, image: retinol, types: ["Normal Skin"], tag: "NIGHT CARE" },
  { id: 13, name: "Rose Face Mist", price: 349, image: faceMist, types: ["Dry Skin", "Normal Skin"], tag: "FRESH HYDRATION" },
  { id: 14, name: "Exfoliating Scrub", price: 399, image: scrub, types: ["Normal Skin"], tag: "EXFOLIATION" },
  { id: 15, name: "Hydrating Sheet Mask", price: 199, image: sheetMask, types: ["Dry Skin", "Sensitive Skin"], tag: "QUICK HYDRATION" },
];

const filters = [
  "All Skin Types",
  "Oily Skin",
  "Dry Skin",
  "Combination Skin",
  "Sensitive Skin",
  "Normal Skin",
  "Blemish-Prone Skin",
];

export default function Products({ addToCart }) {
  const [filter, setFilter] = useState("All Skin Types");

  const visible = products.filter((product) =>
    filter === "All Skin Types" ||
    (filter === "Blemish-Prone Skin"
      ? [1, 2, 9, 11].includes(product.id)
      : product.types.includes(filter))
  );

  return (
    <section className="aura-section container">
      <div className="aura-section-heading" data-aos="fade-up">
        <span className="aura-eyebrow">YOUR SKINCARE WARDROBE</span>
        <h1>Find your skin's <em>match.</em></h1>
        <p>Choose your skin type to explore the collection.</p>
      </div>

      <div className="aura-filters">
        {filters.map((item) => (
          <button key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      <p className="aura-results">{visible.length} products found</p>

      <div className="row g-4">
        {visible.map((product, index) => (
          <div className="col-sm-6 col-lg-4" key={product.id}
            data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
            <div className="aura-product-card">
              <div className="aura-product-image">
                <img src={product.image} alt={product.name} />
                <span>{product.tag}</span>
              </div>
              <div className="aura-product-info">
                <h5>{product.name}</h5>
                <p className="aura-skin-label">{product.types.join(" · ")}</p>
                <div className="aura-product-bottom">
                  <strong>₹{product.price}</strong>
                  <button onClick={() => addToCart(product)}>
                    Add to bag +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
