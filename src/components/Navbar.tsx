import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo-fitfood.png";

function Navbar() {
  const { pathname } = useLocation();

  const menu = [
    {
      nome: "HOME",
      rota: "/",
    },
    {
      nome: "REGISTRO ALIMENTAR",
      rota: "/registro-alimentar",
    },
    {
      nome: "SOBRE NÓS",
      rota: "/sobre",
    },
  ];

  return (
    <header
      className={`w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-300 ${pathname === "/"
          ? "absolute top-0 left-0 bg-transparent"
          : "relative bg-[#0E3322]"
        }`}
    >
      <Link to="/">
        <img
          src={logo}
          alt="Fit Food"
          className="h-20 object-contain cursor-pointer"
        />
      </Link>

      <nav className="flex items-center gap-10 font-creato text-lg">
        {menu.map((item) => {
          const ativo = pathname === item.rota;

          return (
            <Link
              key={item.rota}
              to={item.rota}
              className={`relative pb-2 transition-colors duration-300 ${ativo
                  ? "text-white"
                  : "text-white hover:text-[#D9D9D9]"
                }`}
            >
              {item.nome}

              {ativo && (
                <span className="absolute left-0 -bottom-[2px] h-[3px] w-full rounded-full bg-white"></span>
              )}
            </Link>
          );
        })}
      </nav>

      <Link
        to="/perfil"
        className="flex items-center gap-2 rounded-full bg-[#839558] px-5 py-2 text-white font-creato transition-all duration-300 hover:bg-[#708347]"
      >
        <span>Perfil</span>

        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="8"
            r="4"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </Link>
    </header>
  );
}

export default Navbar;