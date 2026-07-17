import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-fitfood.png";

function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    sessionStorage.clear();
    navigate("/");
  }
  
  const rotasSemNavbar = ["/", "/cadastro"];

  if (rotasSemNavbar.includes(pathname)) {
    return null;
  }

  const menu = [
    {
      nome: "HOME",
      rota: "/home",
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
      className={`w-full flex items-center justify-between px-8 py-4 z-50 transition-all duration-300 ${pathname === "/home"
        ? "absolute top-0 left-0 bg-transparent"
        : "relative bg-[#0E3322]"
        }`}
    >
      <Link to="/home">
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

      <div className="flex items-center gap-3">
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

        <button
          onClick={logout}
          className="rounded-full border border-[#F0F0CF] px-5 py-2 text-[#F0F0CF] font-creato transition-all duration-300 hover:bg-[#F0F0CF] hover:text-[#0E3322]"
        >
          Sair
        </button>
      </div>
    </header>
  );
}

export default Navbar;