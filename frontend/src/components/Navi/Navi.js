import React from "react";
import "./Navi.css";
import brand from "../../assets/icons/logo.svg";
import { FaBehanceSquare, FaYoutubeSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Navi = () => {
  return (
    <div className="navi">
      <div className="brand">
        <img src={brand} alt="logo" width={100} height={40} />
      </div>

      <div className="links">
        <a href="#">Hakkımızda</a>
        <a href="#">Jüri - Yarışma Yazılımı</a>
        <a href="#">Word Ninja</a>
        <a href="#">Word Pyramids</a>
      </div>

      <div className="icons">
        <FaYoutubeSquare className="icon"/>
        <FaBehanceSquare className="icon"/>
        <FaInstagramSquare className="icon"/>
        <FaLinkedin className="icon"/>
      </div>
    </div>
  );
};

export default Navi;
