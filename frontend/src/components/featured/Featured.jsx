import React from "react";
import searchImg from "../../images/search.png";
import manImg from "../../images/man.png";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div
        className="left"
        style={{ display: "flex", gap: "20px", flexDirection: "column" }}
      >
        <h1>
          Find the perfect <span>freelance</span> services for your business
        </h1>
        <div className="search">
          <div className="searchInput">
            <img src={searchImg} alt={searchImg} />
            <input type="text" placeholder='Try "building mobile app"' />
          </div>
          <button>Search</button>
        </div>
        <div className="popular">
          <span>Popular:</span>
          <button>Web Design</button>
          <button>WordPress</button>
          <button>Logo Design</button>
          <button>AI Services</button>
        </div>
      </div>
      <div className="right">
        <img src={manImg} alt={manImg} />
      </div>
    </div>
  );
};

export default Featured;
