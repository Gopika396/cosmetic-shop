
import { Link } from "react-router-dom";
import hero from "../assets/image/hero.jpg";

export default function About() {
  return (
    <section className="aura-section container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6" data-aos="fade-right">
          <img src={hero} className="aura-about-image" alt="SkinAura skincare collection" />
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <span className="aura-eyebrow">OUR PHILOSOPHY</span>
          <h1 className="aura-about-title">
            Every skin has <em>a story.</em>
          </h1>
          <p>
            SkinAura is a skincare store concept designed to make
            exploring everyday skincare easier.
          </p>
          <p>
            Discover products organized by skin type, learn simple
            skincare habits, and build a routine that suits your needs.
          </p>
          <p>
            Our approach is simple: understand your skin, choose
            products thoughtfully, and keep your routine consistent.
          </p>
          <Link to="/skin-types" className="aura-button">
            Explore the skin guide
          </Link>
        </div>
      </div>

      <div className="row g-4 mt-5">
        {[
          ["bi-droplet-half", "Thoughtful skincare", "Explore everyday skincare essentials."],
          ["bi-heart", "Your skin, your way", "Learn about different skin types and needs."],
          ["bi-sun", "Everyday protection", "Make sun protection part of your routine."],
        ].map(([icon, title, description], index) => (
          <div className="col-md-4" key={title}
            data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="aura-value-card">
              <i className={`bi ${icon}`} />
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
