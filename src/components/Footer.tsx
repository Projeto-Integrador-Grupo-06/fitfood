import './Footer.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Fit Food promove hábitos alimentares mais saudáveis com praticidade e organização.</p>
      <p>&copy; {anoAtual} Fit Food. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
