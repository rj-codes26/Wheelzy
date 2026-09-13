import React from "react";

function CategoryBar() {
  const categories = [
    "🚗 Cars",
    "🏍️ Bikes",
    "🚙 SUVs",
    "🚐 Vans",
    "🚌 Buses",
    "🚛 Trucks",
    "👨‍✈️ Drivers",
  ];

  return (
    <div className="category-bar">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          {category}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;