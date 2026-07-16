import { Plus } from "@phosphor-icons/react";
import { COLORS, FONT, BORDER, SHADOW } from "../../../utils/theme";

interface CardResultadoProps {
  nome: string;
  imagem?: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  onAdicionar: () => void;
}

function CardResultado({
  nome,
  imagem,
  calorias,
  proteinas,
  carboidratos,
  gorduras,
  onAdicionar,
}: CardResultadoProps) {
  return (
    <div
      className="flex items-center justify-between gap-4 p-4 transition hover:scale-[1.02]"
      style={{
        backgroundColor: COLORS.background,
        borderRadius: BORDER.card,
        boxShadow: SHADOW.card,
      }}
    >
      <div className="flex items-center gap-3">
        {imagem ? (
          <img src={imagem} alt={nome} className="h-14 w-14 rounded-xl object-cover" />
        ) : (
          <div className="h-14 w-14 rounded-xl" style={{ backgroundColor: COLORS.white }} />
        )}

        <div>
          <p style={{ fontFamily: FONT.bold, color: COLORS.primary }}>{nome}</p>
          <p style={{ fontFamily: FONT.regular, color: COLORS.primary }} className="text-sm opacity-70">
            {calorias} kcal · {proteinas}g P · {carboidratos}g C · {gorduras}g G
          </p>
        </div>
      </div>

      <button
        onClick={onAdicionar}
        className="p-2 transition hover:scale-105"
        style={{ backgroundColor: COLORS.secondary, borderRadius: BORDER.button }}
      >
        <Plus size={20} color={COLORS.white} weight="bold" />
      </button>
    </div>
  );
}

export default CardResultado;