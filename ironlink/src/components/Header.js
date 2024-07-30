import React from "react";
import '../style/header.css';
// import { Link } from 'react-router-dom';
import Logo from '../imagens/logoFelipe.png';

class Header extends React.Component {
  render() {
    return(
      <div className="main-header">
        <div className="imgLogo">
          <a href="/"><img className="imgHeader" src={Logo}/></a>
        </div>
        <div className="navbar">
          <p>Sobre</p>
          <p>Cursos</p>
          <p>Contato</p>
          <p>Promoções</p>
        </div>
      </div>
    );
  }
}

export default Header;
