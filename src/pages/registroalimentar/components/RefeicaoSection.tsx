import { Plus } from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";
import CardAlimento from "./CardAlimento";

interface ItemRefeicao {
  itemId: string; // ID local único (gerado pelo UUID)
  id?: number;    // ID do Banco de Dados (opcional para itens recém-criados localmente)
  nome: string;
  nomeOriginal?: string;
  imagem?: string;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
}

interface Props {
  titulo: string;
  itens: ItemRefeicao[];
  onAdicionar: () => void;
  onEditar: (item: ItemRefeicao) => void;
  onExcluir: (item: ItemRefeicao) => void;
}

function RefeicaoSection({ titulo, itens, onAdicionar, onEditar, onExcluir }: Props) {
  return (
    <section className="mt-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>
          {titulo}
        </h2>

        <button
          onClick={onAdicionar}
          className="flex items-center gap-2 rounded-full px-5 py-3 text-white transition hover:scale-105"
          style={{ backgroundColor: COLORS.primary }}
        >
          <Plus size={20} weight="bold" />
          Novo alimento
        </button>
      </div>

      <div className="space-y-3">
        {itens.length === 0 && (
          <p style={{ color: COLORS.primary }} className="text-sm opacity-60">
            Nenhum alimento adicionado ainda.
          </p>
        )}

        {itens.map((item) => (
          <CardAlimento
            key={item.itemId}
            nome={item.nome}
            calorias={item.calorias}
            onEditar={() => onEditar(item)}
            onExcluir={() => onExcluir(item)}
          />
        ))}
      </div>
    </section>
  );
}

export default RefeicaoSection;