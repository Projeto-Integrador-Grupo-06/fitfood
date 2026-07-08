import logo from '../assets/img/logo-fitfood.png';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Fit Food" />
      </div>

      <nav className="navbar-links">
        <a href="/" className="navbar-home">Home</a>
        <a href="/registro-alimentar">Registro alimentar</a>
      </nav>

      <div className="navbar-perfil">
        <a href="/perfil">Perfil</a>
        <span className="navbar-perfil-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </div>
    </header>
  );
}

export default Navbar;

