import React from "react";
import me from "../../assets/me.png";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            {"<about>"}
            <br />
            <br />
            Hi, I am Anh Tuan, and I am a self-taught developer. My passion lies
            in the development of full stack applications, but I also have a
            little experience in data science and hardware programming. I am
            always keen to learn new technologies to extend my tech stack. If
            you have any questions, feel free to contact me any time!
            <br />
            <br />
            {"</about>"}
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's connet
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
