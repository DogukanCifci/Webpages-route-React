import React from "react";
import html from "../../assets/img/logo_html.png";
import css from "../../assets/img/logo_css.png";
import brush from "../../assets/img/logo_brush.png";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <>
      <div className="box">
        <Link to="/html">
          <img src={html} alt="" />
        </Link>

        <h3>HTML5 MARK UP</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box">
        <Link to="/css">
          <img src={css} alt="" />
        </Link>

        <h3>CSS3 STYLING</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
      <div className="box">
        <Link to="/logo">
          <img src={brush} alt="" />
        </Link>

        <h3>GRAPHIC DESIGN</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi
          augue, viverra sit amet ultricies
        </p>
      </div>
    </>
  );
};

export default Card;
