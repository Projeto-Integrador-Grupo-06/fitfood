import {
  Flame,
  Barbell,
  Bread,
  Drop,
} from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";
import BarraCalorias from "./BarraCalorias";

interface ResumoDiarioProps {
  caloriasConsumidas: number;
  metaDiaria?: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
}

function ResumoDiario({
  caloriasConsumidas,
  metaDiaria = 2000,
  proteinas,
  carboidratos,
  gorduras,
}: ResumoDiarioProps) {

  const diferenca = metaDiaria - caloriasConsumidas;

  let mensagem = "";
  let corMensagem = "";

  if (diferenca > 0) {
    mensagem = `Faltam ${diferenca.toFixed(0)} kcal para atingir sua meta diária.`;
    corMensagem = "#2E7D32";
  } else if (diferenca < 0) {
    mensagem = `Você ultrapassou sua meta em ${Math.abs(diferenca).toFixed(0)} kcal.`;
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
          className="rounded-full px-4 py-2 text-white font-semibold text-sm md:text-base"
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

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F2] p-4">
          <Barbell size={28} color={COLORS.primary} />

          <div>
            <p className="text-sm text-gray-500">Proteínas</p>
            <strong>{proteinas.toFixed(1)} g</strong>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F2] p-4">
          <Bread size={28} color={COLORS.secondary} />

          <div>
            <p className="text-sm text-gray-500">Carboidratos</p>
            <strong>{carboidratos.toFixed(1)} g</strong>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-[#F7F7F2] p-4">
          <Drop size={28} color={COLORS.accent} />

          <div>
            <p className="text-sm text-gray-500">Gorduras</p>
            <strong>{gorduras.toFixed(1)} g</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumoDiario; 