import React from "react";
import "./Navi.css";
import brand from "../../assets/icons/logo.svg";
import { FaBehanceSquare, FaYoutubeSquare, FaInstagramSquare, FaLinkedin, FaBars } from "react-icons/fa";

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
        <FaYoutubeSquare className="icon" size={20}/>
        <FaBehanceSquare className="icon" size={20}/>
        <FaInstagramSquare className="icon" size={20}/>
        <FaLinkedin className="icon" size={20}/>
        <FaBars className="icon" size={20}/>
      </div>
    </div>
  );
};

export default Navi;
