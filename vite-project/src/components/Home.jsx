import React from "react";
import "../assets/style/Home.css"; 
import { Link } from "react-router-dom";


function Home() {
  return (
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
      <div className="div3">Contenu de div3</div>
      <div className="div4">Contenu de div4</div>
    </div>
  );
}

export default Home;
