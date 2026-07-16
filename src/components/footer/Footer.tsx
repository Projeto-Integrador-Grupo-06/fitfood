import { useLocation } from "react-router-dom";

function Footer() {
  const anoAtual = new Date().getFullYear();
  const { pathname } = useLocation();

  const rotasSemFooter = ["/", "/cadastro"];

  if (rotasSemFooter.includes(pathname)) {
    return null;
  }

  return (
    <footer className="w-full bg-[#0E3322] py-6 px-4 text-center text-white">
      <div className="mx-auto max-w-7xl">
        <p className="font-['Creato_Display'] text-sm">
          Fit Food promove hábitos alimentares mais saudáveis com praticidade e organização.
        </p>

        <p className="mt-2 text-sm">
          &copy; {anoAtual} Fit Food. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;