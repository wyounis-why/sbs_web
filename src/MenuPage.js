import React, { useState } from "react";
import "./styles/MenuPage.css";

const menuData = {
  Appetizers: [
    {
      name: "Vegetable Samosa",
      price: "$4",
      img: "/dum_1.jpg",
      description: "Crispy pastry stuffed with spicy potatoes and peas.",
    },
    {
      name: "Chicken Spring Rolls",
      price: "$6",
      img: "/dum_1.jpg",
      description: "Deep-fried rolls filled with chicken and vegetables.",
    },
    {
      name: "Spicy Aloo Tikki",
      price: "$5",
      img: "/dum_1.jpg",
      description: "Pan-fried spiced potato patties served with chutney.",
    },
    {
      name: "Masala Fries",
      price: "$4.50",
      img: "/dum_1.jpg",
      description: "French fries tossed in house-blended masala seasoning.",
    },
  ],
  Chai: [
    {
      name: "Masala Chai",
      price: "$3",
      img: "/dum_1.jpg",
      description: "Traditional Indian tea brewed with spices and milk.",
    },
    {
      name: "Ginger Chai",
      price: "$3.50",
      img: "/dum_1.jpg",
      description: "Zesty chai infused with fresh ginger.",
    },
    {
      name: "Cardamom Chai",
      price: "$3.75",
      img: "/dum_1.jpg",
      description: "Smooth chai with aromatic cardamom pods.",
    },
    {
      name: "Kashmiri Pink Chai",
      price: "$4",
      img: "/dum_1.jpg",
      description: "Creamy pink tea with a hint of salt and pistachios.",
    },
  ],
  // Add Drinks, Snacks, Entrees, and Desserts here similarly...
};

const MenuPage = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (itemName) => {
    setActiveItem(activeItem === itemName ? null : itemName);
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-page">
        <h1 className="menu-title">Our Menu</h1>

        {Object.entries(menuData).map(([section, items]) => (
          <div className="menu-section" key={section}>
            <h2>{section}</h2>
            <ul>
              {items.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleToggle(item.name)}
                  className={activeItem === item.name ? "active" : ""}
                >
                  <div
                    className={`menu-item-row ${
                      activeItem === item.name ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>

                  {activeItem === item.name && (
                    <div className="menu-popup">
                      <img src={item.img} alt={item.name} />
                      <p>{item.description}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
