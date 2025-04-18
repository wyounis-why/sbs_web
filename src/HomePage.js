import React, { useEffect, useRef, useState } from "react";
import "./styles/HomePage.css";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";

const Section = ({ side, text }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-section ${visible ? "visible" : ""}`}>
      <div className={`section-content ${side}`}>
        <img
          src="/dum_1.jpg"
          alt="Restaurant Logo"
          className="image-placeholder"
        />
        <p>{text}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const dummyTextLeft = "This is a sample paragraph with image on the left.";
  const dummyTextRight = "This is a sample paragraph with image on the right.";

  return (
    <div className="home-page">
      <Section side="left" text={dummyTextLeft} />
      <AboutPage />
      <Section side="right" text={dummyTextRight} />
      <MenuPage />
      <Section side="left" text={dummyTextLeft} />
      <Section side="right" text={dummyTextRight} />
      <Section side="left" text={dummyTextLeft} />
      <Section side="right" text={dummyTextRight} />
    </div>
  );
};

export default HomePage;
