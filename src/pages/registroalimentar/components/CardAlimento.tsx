import { PencilSimple, Trash } from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";

interface CardAlimentoProps {
  nome: string;
  calorias: number;
  onEditar: () => void;
  onExcluir: () => void;
}

function CardAlimento({
  nome,
  calorias,
  onEditar,
  onExcluir,
}: CardAlimentoProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
      <div>
        <h3
          className="text-lg font-semibold"
          style={{ color: COLORS.primary }}
        >
          {nome}
        </h3>

        <p className="text-sm text-gray-500">
          {calorias} kcal
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onEditar}
          className="transition hover:scale-110"
          title="Editar alimento"
        >
          <PencilSimple
            size={22}
            color={COLORS.accent}
          />
        </button>

        <button
          onClick={onExcluir}
          className="transition hover:scale-110"
          title="Excluir alimento"
        >
          <Trash
            size={22}
            color={COLORS.secondary}
          />
        </button>
      </div>
    </div>
  );
}

export default CardAlimento;