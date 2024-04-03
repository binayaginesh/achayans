import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent2 from "../components/FrameComponent2";
import "./Burger.css";
// About.js
import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      {/* Add link back to Home */}
      <a href="menu.js">Home</a>
    </div>
  );
}

export default About;

// About.js
import { Link } from 'react-router-dom';

// Inside your component
<Link to="menu.js">Home</Link>



const Burger = () => {
  const navigate = useNavigate();

  const onShoppingBasketSymbolClick = useCallback(() => {
    // Please sync "cart" to the project
  }, []);

  const onArrowBackIosClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="burger">
      <section className="burger-inner">
        <div className="frame-parent">
          <div className="burger-component-parent">
            <div className="burger-component" />
            <img
              className="burger-sandwich-3-icon"
              loading="lazy"
              alt=""
              src="/burger-sandwich-3@2x.png"
            />
          </div>
          <img
            className="arrow-back-ios"
            loading="lazy"
            alt=""
            src="/arrow-back-ios.svg"
            onClick={onArrowBackIosClick}
          />
        </div>
      </section>
      <FrameComponent2
        beefBurger="Beef Burger"
        onShoppingBasketSymbolClick={onShoppingBasketSymbolClick}
      />
    </div>
  );
};

export default Burger;
