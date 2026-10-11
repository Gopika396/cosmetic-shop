
import { Link } from "react-router-dom";

import cleanser from "../assets/image/cleanser.jpg";
import moisturizer from "../assets/image/moisturizer.jpg";
import serum from "../assets/image/serum.jpg";
import sunscreen from "../assets/image/sunscreen.jpg";
import clayMask from "../assets/image/clay-mask.jpg";
import nightCream from "../assets/image/night-cream.jpg";

const skinTypes = [
  {
    name: "Oily Skin",
    subtitle: "SHINE CONTROL",
    image: cleanser,
    description: "Skin may look shiny, especially around the forehead, nose and chin. Pores may be more visible.",
    use: ["Gentle gel cleanser", "Lightweight moisturizer", "Broad-spectrum SPF 30+ sunscreen"],
    tips: ["Cleanse gently morning and evening.", "Choose non-comedogenic products.", "Use lightweight hydration."],
    avoid: "Harsh cleansers, aggressive scrubbing and repeatedly washing your face.",
  },
  {
    name: "Dry Skin",
    subtitle: "DEEP COMFORT",
    image: moisturizer,
    description: "Skin may feel tight, rough, flaky or uncomfortable, especially after cleansing.",
    use: ["Gentle cleanser", "Cream-based moisturizer", "Hydrating serum if needed", "Broad-spectrum SPF 30+ sunscreen"],
    tips: ["Moisturize while skin is slightly damp.", "Use lukewarm water.", "Choose gentle, fragrance-free products if irritation occurs."],
    avoid: "Very hot water, harsh exfoliation and products that leave your skin feeling tight.",
  },
  {
    name: "Combination Skin",
    subtitle: "FIND YOUR BALANCE",
    image: serum,
    description: "The forehead, nose and chin may be oily while the cheeks remain normal or dry.",
    use: ["Gentle cleanser", "Lightweight moisturizer", "Hydrating serum if needed", "Broad-spectrum sunscreen"],
    tips: ["Adjust moisturizer to different areas.", "Keep the routine simple.", "Observe how your skin responds to products."],
    avoid: "Strong oil-control products over areas that are already dry.",
  },
  {
    name: "Sensitive Skin",
    subtitle: "GENTLE ESSENTIALS",
    image: nightCream,
    description: "Skin may sting, itch, burn or become red when exposed to certain products or environmental factors.",
    use: ["Mild fragrance-free cleanser", "Simple fragrance-free moisturizer", "Sunscreen your skin tolerates"],
    tips: ["Introduce one product at a time.", "Patch-test new products.", "Stop using products that repeatedly cause irritation."],
    avoid: "Known irritants and strong exfoliating products that trigger reactions.",
  },
  {
    name: "Normal Skin",
    subtitle: "EVERYDAY BALANCE",
    image: sunscreen,
    description: "Skin generally feels comfortable without persistent excessive oiliness or dryness.",
    use: ["Gentle cleanser", "Suitable moisturizer", "Broad-spectrum SPF 30+ sunscreen"],
    tips: ["Keep a consistent routine.", "Add targeted products only when needed.", "Use sun protection every day."],
    avoid: "Adding unnecessary products when your existing routine works well.",
  },
  {
    name: "Blemish-Prone Skin",
    subtitle: "KEEP IT GENTLE",
    image: clayMask,
    description: "Blackheads, whiteheads or pimples may occur frequently.",
    use: ["Gentle cleanser", "Non-comedogenic moisturizer", "Broad-spectrum sunscreen"],
    tips: ["Avoid picking pimples.", "Introduce acne-targeted products gradually.", "Seek professional advice for persistent or painful acne."],
    avoid: "Aggressive scrubbing, squeezing pimples and layering multiple strong treatments.",
  },
];

const tips = [
  {
    icon: "bi-droplet-half",
    title: "Cleanse gently",
    text: "Wash without scrubbing, and avoid products that leave your skin uncomfortable.",
  },
  {
    icon: "bi-sun",
    title: "Protect from the sun",
    text: "Use broad-spectrum SPF 30 or higher and reapply according to the product directions.",
  },
  {
    icon: "bi-heart",
    title: "Introduce products slowly",
    text: "Add one new product at a time and patch-test before regular use.",
  },
  {
    icon: "bi-moon-stars",
    title: "Keep a simple routine",
    text: "Consistent cleansing, moisturizing and sun protection make a practical starting point.",
  },
];

export default function SkinType() {
  return (
    <>
      <section className="skin-type-hero">
        <div className="container" data-aos="fade-up">
          <span className="aura-eyebrow">YOUR PERSONAL SKIN GUIDE</span>
          <h1>Get to know your <em>skin.</em></h1>
          <p>
            Understand your skin type, discover suitable skincare,
            and build a routine that works for your everyday life.
          </p>
          <a href="#skin-types" className="aura-button">
            Explore skin types <i className="bi bi-arrow-down" />
          </a>
        </div>
      </section>

      <section className="container aura-section" id="skin-types">
        <div className="aura-section-heading" data-aos="fade-up">
          <span className="aura-eyebrow">KNOW YOUR SKIN</span>
          <h2>Every skin has different <em>needs.</em></h2>
          <p>
            Explore common skin types and general care suggestions.
            These descriptions are guides, not a diagnosis.
          </p>
        </div>

        <div className="row g-4">
          {skinTypes.map((skin, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={skin.name}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <article className="skin-type-card">
                <div className="skin-type-image">
                  <img src={skin.image} alt={`${skin.name} skincare products`} />
                  <span>{skin.subtitle}</span>
                </div>

                <div className="skin-type-content">
                  <h3>{skin.name}</h3>
                  <p>{skin.description}</p>

                  <h5><i className="bi bi-check-circle" /> What to use</h5>
                  <ul>
                    {skin.use.map((item) => <li key={item}>{item}</li>)}
                  </ul>

                  <h5><i className="bi bi-stars" /> Skincare tips</h5>
                  <ul>
                    {skin.tips.map((tip) => <li key={tip}>{tip}</li>)}
                  </ul>

                  <div className="skin-type-avoid">
                    <strong>What to avoid</strong>
                    <p>{skin.avoid}</p>
                  </div>

                  <Link to="/products" className="skin-type-link">
                    Explore products <i className="bi bi-arrow-up-right" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="skin-tips-section">
        <div className="container">
          <div className="aura-section-heading" data-aos="fade-up">
            <span className="aura-eyebrow">EVERYDAY ESSENTIALS</span>
            <h2>Small habits, better <em>care.</em></h2>
            <p>Four simple habits to support your skincare routine.</p>
          </div>

          <div className="row g-4">
            {tips.map((tip, index) => (
              <div className="col-sm-6 col-lg-3" key={tip.title}
                data-aos="fade-up" data-aos-delay={index * 100}>
                <article className="skin-tip-card">
                  <i className={`bi ${tip.icon}`} />
                  <h4>{tip.title}</h4>
                  <p>{tip.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container aura-section">
        <div className="skin-routine-box" data-aos="zoom-in">
          <div>
            <span className="aura-eyebrow">YOUR NEXT STEP</span>
            <h2>Build your skincare <em>routine.</em></h2>
            <p>
              Start with a gentle cleanser, moisturizer and sunscreen.
              Add other products according to your skin's needs and tolerance.
            </p>
            <Link to="/products" className="aura-button">
              Shop skincare <i className="bi bi-arrow-up-right" />
            </Link>
          </div>
          <img src={sunscreen} alt="Skincare sunscreen product" />
        </div>
      </section>
    </>
  );
}
