import { useState } from "react";
import { COLORS } from "../../../utils/theme";

interface DiaCalendario {
  data: Date;
  numero: number;
  semana: string;
  ativa: boolean;
}

interface CalendarioProps {
  onSelecionarDia?: (data: Date) => void;
}

function Calendario({ onSelecionarDia }: CalendarioProps) {
  const hoje = new Date();

  const diasSemana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SÁB"];

  const dias: DiaCalendario[] = Array.from({ length: 7 }, (_, index) => {
    const data = new Date();
    data.setDate(hoje.getDate() - 3 + index);

    return {
      data,
      numero: data.getDate(),
      semana: diasSemana[data.getDay()],
      ativa: data.toDateString() === hoje.toDateString(),
    };
  });

  const [dataSelecionada, setDataSelecionada] = useState<Date>(hoje);

  function selecionar(data: Date) {
    setDataSelecionada(data);
    onSelecionarDia?.(data);
  }

  return (
    <section className="mt-10">
      <div className="flex gap-4 overflow-x-auto pb-2">
        {dias.map((dia) => {
          const selecionado =
            dia.data.toDateString() === dataSelecionada.toDateString();

          return (
            <button
              key={dia.data.toDateString()}
              onClick={() => selecionar(dia.data)}
              className={`flex min-w-20 flex-col items-center rounded-2xl px-4 py-3 transition-all duration-300
              ${
                selecionado
                  ? "scale-105 text-white shadow-lg"
                  : "bg-white hover:scale-105"
              }`}
              style={{
                backgroundColor: selecionado ? COLORS.primary : COLORS.white,
                color: selecionado ? COLORS.white : COLORS.primary,
              }}
            >
              <span className="text-xs font-semibold">{dia.semana}</span>
              <span className="mt-1 text-2xl font-bold">{dia.numero}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Calendario;