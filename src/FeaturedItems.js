import React from "react";
import "./styles/FeaturedItems.css";

const featuredData = [
  {
    name: "Kashmiri Pink Chai",
    deal: "Try our creamy pink chai for just $3 today!",
    img: "/dum_1.jpg",
  },
  {
    name: "Desi Loaded Nachos",
    deal: "Spicy twist on your favorite snack — 20% off!",
    img: "/dum_1.jpg",
  },
  {
    name: "Mango Lassi",
    deal: "Cool off with a mango lassi – now only $2.50!",
    img: "/dum_1.jpg",
  },
];

const FeaturedItems = () => {
  return (
    <section className="featured-section">
      <h2 className="featured-title">Featured Items</h2>
      <div className="featured-grid">
        {featuredData.map((item, index) => (
          <div className="featured-card" key={index}>
            <img src={item.img} alt={item.name} className="featured-img" />
            <h3 className="item-name">{item.name}</h3>
            <p className="item-deal">{item.deal}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
