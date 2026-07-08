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
        <span className="navbar-perfil-icon">&#9776;</span>
      </div>
    </header>
  );
}

export default Navbar;

