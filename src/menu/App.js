import React, { useState } from "react";

import Menu from "./Menu";

import data from "./data";

import Catagories from "./Catagories";

function App() {
  const newCategories = ["all", ...new Set(data.map((item) => item.category))];

  console.log(newCategories);

  const [menuItems, setMenuItems] = useState(data);

  const [catagories, setCatagories] = useState(newCategories);

  function filterItems(category) {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);

    setMenuItems(newItems);
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <h2> MR Shop</h2>
        </div>
      </div>
      <section className="menu section">
        <div className="title">
        <img src="logo1.png" height={100} />

          <h2>Our Menu</h2>
          <div className=" underline "></div>
        </div>

        <Catagories newCategories={newCategories} filterItems={filterItems} />

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
