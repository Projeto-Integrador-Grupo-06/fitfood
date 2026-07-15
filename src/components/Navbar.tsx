import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/img/logo-fitfood.png';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header
      className={`w-full flex items-center justify-between px-4 py-2 z-50 ${
        isHome ? 'bg-transparent absolute top-0 left-0' : 'bg-[#0E3322] relative'
      }`}
    >
      <div>
        <img src={logo} alt="Fit Food" className="h-[90px] block" />
      </div>

      <nav className="flex items-center gap-8 font-['Creato_Display']">
        <Link
          to="/"
          className="bg-white text-[#0E3322] px-5 py-1 rounded-full font-medium"
        >
          Home
        </Link>
        <Link to="/registro-alimentar" className="text-white">
          Registro alimentar
        </Link>
        <Link to="/sobre" className="text-white">
          Sobre nós
        </Link>
        <Link to="/apresentacao" className="text-white">
          Apresentação
        </Link>
      </nav>

      <div className="flex items-center gap-2 text-white font-['Creato_Display']">
        <Link to="/perfil">Perfil</Link>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </header>
  );
}

export default Navbar;
