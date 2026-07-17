import { COLORS } from "../../../utils/theme";

function HeaderRegistro() {
  const hoje = new Date();

  const data = hoje.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });

 return (
  <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
    <div>
      <h1
        className="text-4xl md:text-5xl"
        style={{
          color: COLORS.primary,
          fontFamily: "Camera Obscura",
        }}
      >
        Registro alimentar
      </h1>

      <p
        className="mt-3 max-w-2xl text-base md:text-lg"
        style={{
          color: COLORS.primary,
          fontFamily: "Creato Display",
        }}
      >
        Registre suas refeições, acompanhe seu consumo diário de calorias e
        mantenha uma alimentação equilibrada.
      </p>
    </div>

    <div
      className="w-fit rounded-full px-6 py-3 text-lg font-bold text-white shadow-md transition-transform duration-300 hover:scale-105"
      style={{ backgroundColor: COLORS.primary }}
    >
      {data}
    </div>
  </header>
);
}

export default HeaderRegistro;