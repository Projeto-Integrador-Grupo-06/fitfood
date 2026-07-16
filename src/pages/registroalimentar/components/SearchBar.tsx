import { MagnifyingGlass } from "@phosphor-icons/react";
import { COLORS, BORDER } from "../../../utils/theme";

interface SearchBarProps {
  valor: string;
  onChange: (valor: string) => void;
  onPesquisar: () => void;
}

function SearchBar({ valor, onChange, onPesquisar }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Pesquisar alimento..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border px-5 py-3 outline-none transition focus:ring-2"
        style={{
          borderColor: COLORS.primary,
          borderRadius: BORDER.card,
        }}
      />

      <button
        onClick={onPesquisar}
        className="p-3 transition hover:scale-105"
        style={{
          backgroundColor: COLORS.primary,
          borderRadius: BORDER.button,
        }}
      >
        <MagnifyingGlass size={24} color={COLORS.white} weight="bold" />
      </button>
    </div>
  );
}

export default SearchBar;