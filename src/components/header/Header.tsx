import React from "react";
import CTA from "./CTA";
import HeaderContact from "./HeaderContact";
import "./Header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {
  const [text] = useTypewriter({
    words: ["Developer", "Industrial Engineer", "Tech Enthusiast"],
    loop: true, // Infinit
    delaySpeed: 2000,
  });

  return (
    <header id="home">
      <div className="container header__container">
        <CTA />
        <HeaderContact />

        <div className="container main__container">
          <p className="main_name">Anh Tuan Nguyen</p>
          <h2>
            <span>{text}</span>
            <Cursor cursorColor="#fff" />
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
