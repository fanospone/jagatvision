"use client";

import { useEffect, useState } from "react";

const slides = [
  "/slide1.jpg",
  "/slide2.jpg",
  "/slide3.jpg",
  "/slide4.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide})` }}
        />
      ))}

      <div className="hero-content">
        <span>New Arrival</span>
        <h2>Discover Our<br />New Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <button>ORDER</button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
          />
        ))}
      </div>
    </section>
  );
}
