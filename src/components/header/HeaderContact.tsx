import React from "react";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineGithub,
} from "react-icons/ai";

const HeaderContact = () => {
  return (
    <div className="header__contacts">
      <div className="header__contatcs-items">
        <AiOutlineMail />
        <p>nguyanht@yahoo.com</p>
      </div>
      <div className="header__contatcs-items">
        <AiOutlineWhatsApp />
        <p>+49 1512 8722443</p>
      </div>
      <div className="header__contatcs-items">
        <AiOutlineGithub />
        <p>github.com/aqtnguyen</p>
      </div>
    </div>
  );
};

export default HeaderContact;
