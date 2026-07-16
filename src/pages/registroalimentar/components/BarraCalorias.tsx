import { COLORS } from "../../../utils/theme";

interface BarraCaloriasProps {
  consumidas: number;
  meta: number;
}

function BarraCalorias({
  consumidas,
  meta,
}: BarraCaloriasProps) {
  // Evita divisão por zero se a meta for zero ou indefinida
  const metaValida = meta > 0 ? meta : 2000;
  const porcentagem = Math.min((consumidas / metaValida) * 100, 100);

  return (
    <div className="w-full">
      <div className="h-4 w-full overflow-hidden rounded-full bg-gray-200">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${porcentagem}%`,
            backgroundColor: COLORS.primary,
          }}
        />
      </div>
    </div>
  );
}

export default BarraCalorias;