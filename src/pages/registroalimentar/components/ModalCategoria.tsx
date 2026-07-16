import { useEffect, useState } from "react";
import { X } from "@phosphor-icons/react";
import { COLORS } from "../../../utils/theme";

interface Categoria {
    id: number;
    nome: string;
    descricao: string;
}

interface Props {
    aberto: boolean;
    fechar: () => void;
    salvar: (nome: string, descricao: string) => void;
    categoriaEdicao?: Categoria;
}

function ModalCategoria({ aberto, fechar, salvar, categoriaEdicao }: Props) {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    // Preenche ou limpa os inputs com base na ação (Editar ou Nova Categoria)
    useEffect(() => {
        if (aberto) {
            if (categoriaEdicao) {
                setNome(categoriaEdicao.nome);
                setDescricao(categoriaEdicao.descricao || "");
            } else {
                setNome("");
                setDescricao("");
            }
        }
    }, [aberto, categoriaEdicao]);

    if (!aberto) return null;

    function handleSalvar() {
        if (!nome.trim()) {
            alert("Por favor, digite o nome da categoria.");
            return;
        }
        salvar(nome, descricao);
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div
                className="w-full max-w-md rounded-3xl p-8"
                style={{ backgroundColor: COLORS.background }}
            >
                <div className="flex justify-between mb-6 items-center">
                    <h2
                        className="text-2xl font-bold"
                        style={{ color: COLORS.primary }}
                    >
                        {categoriaEdicao ? "Editar categoria" : "Nova categoria"}
                    </h2>

                    <button onClick={fechar} className="p-1 hover:scale-110 transition">
                        <X size={24} color={COLORS.primary} />
                    </button>
                </div>

                <div className="space-y-4">
                    <input
                        placeholder="Nome da categoria"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 p-3 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />

                    <textarea
                        placeholder="Descrição curta (opcional)"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 p-3 h-28 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>

                <div className="flex justify-end mt-6 gap-3">
                    <button
                        onClick={fechar}
                        className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                        Cancelar
                    </button>

                    <button
                        onClick={handleSalvar}
                        className="px-6 py-2 rounded-full text-white font-medium hover:scale-105 transition"
                        style={{ backgroundColor: COLORS.secondary }}
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ModalCategoria;