import { Tag, PencilSimple, Trash } from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";

interface CardCategoriaProps {
    nome: string;
    onClick?: () => void;
    onEditar?: () => void;
    onExcluir?: () => void;
}

function CardCategoria({
    nome,
    onClick,
    onEditar,
    onExcluir,
}: CardCategoriaProps) {
    return (
        <div
            className="flex items-center gap-3 rounded-full px-5 py-3 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg bg-white"
        >
            {/* Área clicável principal para selecionar a categoria */}
            <button
                onClick={onClick}
                className="flex items-center gap-2 transition hover:scale-105 active:scale-95"
            >
                <Tag
                    size={20}
                    color={COLORS.secondary}
                    weight="fill"
                />

                <span
                    className="font-medium"
                    style={{ color: COLORS.primary }}
                >
                    {nome}
                </span>
            </button>

            {/* Divisor visual discreto se houver ações extras */}
            {(onEditar || onExcluir) && (
                <div className="h-4 w-px bg-gray-200 self-center ml-1" />
            )}

            {/* Botões de Ação */}
            <div className="flex gap-1.5">
                {onEditar && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onEditar();
                        }}
                        className="rounded-full p-1 transition hover:bg-gray-100 hover:scale-110 active:scale-90"
                        title="Editar categoria"
                    >
                        <PencilSimple size={16} color={COLORS.accent} weight="bold" />
                    </button>
                )}

                {onExcluir && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onExcluir();
                        }}
                        className="rounded-full p-1 transition hover:bg-red-50 hover:scale-110 active:scale-90"
                        title="Excluir categoria"
                    >
                        <Trash size={16} color={COLORS.secondary} weight="bold" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default CardCategoria;