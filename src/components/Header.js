import React, { Component } from 'react';
import '../styles/Header.css'

import Logo from '../assets/logo.png';

class Header extends Component {
  render() {
    return (
      <>
      <div className="header-container">
        <div className="header">
          <img src={Logo} />
          <h3>Meu Perfil</h3>
        </div>
      </div>
      </>
    );
  }
}

export default Header;