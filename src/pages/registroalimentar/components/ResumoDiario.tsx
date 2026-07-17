import { Flame } from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";
import BarraCalorias from "./BarraCalorias";

interface ResumoDiarioProps {
  caloriasConsumidas: number;
  metaDiaria?: number;
}

function ResumoDiario({
  caloriasConsumidas,
  metaDiaria = 2000,
}: ResumoDiarioProps) {
  const diferenca = metaDiaria - caloriasConsumidas;

  let mensagem = "";
  let corMensagem = "";

  if (diferenca > 0) {
    mensagem = `Faltam ${diferenca.toFixed(
      0
    )} kcal para atingir sua meta diária.`;
    corMensagem = "#2E7D32";
  } else if (diferenca < 0) {
    mensagem = `Você ultrapassou sua meta em ${Math.abs(
      diferenca
    ).toFixed(0)} kcal.`;
    corMensagem = "#C62828";
  } else {
    mensagem = "Parabéns! Você atingiu exatamente sua meta diária.";
    corMensagem = "#1565C0";
  }

  return (
    <section
      className="mt-8 rounded-3xl p-6 shadow-lg"
      style={{ backgroundColor: COLORS.white }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Flame
            size={28}
            weight="fill"
            color={COLORS.secondary}
          />

          <h2
            className="text-2xl font-bold"
            style={{ color: COLORS.primary }}
          >
            Resumo do dia
          </h2>
        </div>

        <span
          className="rounded-full px-4 py-2 text-sm font-semibold text-white md:text-base"
          style={{ backgroundColor: COLORS.secondary }}
        >
          {caloriasConsumidas.toFixed(0)} / {metaDiaria} kcal
        </span>
      </div>

      <div className="mt-6">
        <BarraCalorias
          consumidas={caloriasConsumidas}
          meta={metaDiaria}
        />
      </div>

      <p
        className="mt-4 text-center font-semibold"
        style={{ color: corMensagem }}
      >
        {mensagem}
      </p>
    </section>
  );
}

export default ResumoDiario;