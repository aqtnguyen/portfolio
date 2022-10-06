import React, { useState } from "react";
import "./Portfolio.css";
import { data } from "./PortfolioData";

const Portfolio = () => {
  const [currImg, setCurrImg] = useState(0);

  return (
    <section id="portfolio">
      <h2>My Portfolio</h2>

      <div className="container portfolio__container">
        <div className="portfolio__item">
          <div
            className="portfolio__item-left"
            onClick={() => {
              currImg > 0 && setCurrImg(currImg - 1);
            }}
          >
            <p>{"<"}</p>
          </div>
          <div className="portfolio__item-center">
            <img src={data[currImg].image} alt={data[currImg].title} />
            <h3>
              Project {data[currImg].id} of {data.length}: {data[currImg].title}
            </h3>
            <span>{data[currImg].description}</span>
            <p>
              <span>Front end: </span>
              {data[currImg].frontend}
              <br />
              <span>Back end: </span> {data[currImg].backend}
            </p>
            <a href={data[currImg].github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div
            className="portfolio__item-right"
            onClick={() => {
              currImg < data.length - 1 && setCurrImg(currImg + 1);
            }}
          >
            <p>{">"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
