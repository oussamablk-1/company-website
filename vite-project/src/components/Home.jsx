import React from "react";
import "../assets/style/Home.css"; 
import { Link } from "react-router-dom";
import cercle from "/cercle.png"


function Home() {

  return (
    <div>
      <div className="parent">
        <div className="div1">
          <h2>AGENCE CRÉATION DE SITE WEB</h2>
          <p>
            Bienvenue dans notre agence web spécialisée dans la création de sites web
            modernes et performants. Nous transformons vos idées en sites web
            exceptionnels.
          </p>
          <Link to="/prices-and-quote">
            <button>Découvrez nos tarifs</button>
          </Link>
        </div>
        <div className="div2"></div>
      </div>

      <div className="timeline" >

        <div className="container left-container">
        <img src={cercle} alt="cercle" />
          <div className="text-box">
            <h2>Argument 1</h2>
            <big>Chiffre</big>
            <p>explication</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
        <img src={cercle} alt="cercle" />
          <div className="text-box">
            <h2>Argument 2</h2>
            <big>Chiffre</big>
            <p>explication</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
        <img src={cercle} alt="cercle" />
          <div className="text-box">
            <h2>Argument 3</h2>
            <big>Chiffre</big>
            <p>explication</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
        <img src={cercle} alt="cercle" />
          <div className="text-box">
            <h2>Argument 4</h2>
            <big>Chiffre</big>
            <p>explication</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
        <img src={cercle} alt="cercle" />
          <div className="text-box">
            <h2>Argument 3</h2>
            <big>Chiffre</big>
            <p>explication</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
        <img src={cercle} alt="cercle" />
          <div className="text-box">
            <h2>Argument 4</h2>
            <big>Chiffre</big>
            <p>explication</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
