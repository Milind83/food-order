import React from "react";
import food from './assets/food.jpg'

function Home() {
  return (
    <div className="Home" style={{backgraundImage: `url(${food})`}}>
      <div className="headerContainer">
      </div>
    </div>
  );
}

export default Home;
