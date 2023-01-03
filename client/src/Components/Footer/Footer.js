import React from "react";
import footerStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={footerStyle.footerContainer}>
        <div className={footerStyle.services}>
          <p>Web Development</p>
          <p>Internet Marketing</p>
          <p>System Engineering</p>
        </div>
        <div className={footerStyle.cases}>
          <p>Web & Mobile</p>
          <p>UX/UI</p>
        </div>
        <div className={footerStyle.reviews}>
          <p>We would be grateful if you leave a review</p>
        </div>
        <div className={footerStyle.contacts}>
          <p>We are located around the globe</p>
          <p>+38 098 0709098</p>
          <p>ultrawaveteam@gmail.com</p>
        </div>
      </div>
      <p className={footerStyle.Copyright}>Copyright © 2022</p>
    </>
  );
};

export default Footer;
