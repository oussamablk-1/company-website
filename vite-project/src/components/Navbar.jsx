import { Link } from "react-router-dom";
import React from "react";
import logo from "/logo.png"


function Navbar(){
    const navbarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'white',
        zIndex: 999, // Pour s'assurer que la navbar est au-dessus du contenu
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      };
    
      const ulStyle = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around', // Pour aligner horizontalement les éléments
        alignItems: 'center', // Pour aligner verticalement les éléments au centre
        padding: 0,
      };

      const logoStyle = {
        width: '150px', // Ajustez la largeur selon vos besoins
      };

      return (
        <nav style={navbarStyle}>
          <ul style={ulStyle}>
            <li>
              <img src={logo} alt="Logo" style={logoStyle}/>
            </li>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/our-work">Nos réalisations</Link>
            </li>
            <li>
                <Link to="prices-and-quote">Tarifs et devis</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
                <Link to="/contact">Nous contacter</Link>
            </li>
          </ul>
        </nav>
      );
    }

export default Navbar;