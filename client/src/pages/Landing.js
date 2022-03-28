import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>FyF Traslados</h1>
          <p>
            'm baby wolf flannel pinterest, YOLO tumeric meggings butcher
            vaporware kogi pickled tousled helvetica shabby chic. Kitsch iceland
            stumptown selfies la croix chicharrones small batch banh mi offal
            forage keffiyeh swag vape activated charcoal beard. Salvia tumeric
            ennui pork belly mustache drinking vinegar truffaut.
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="fyf" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
