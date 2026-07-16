import { useState } from "react";
import { Link } from "react-router-dom";
import fundoHome from "../../assets/img/fundo-home.webp";
import carnebatata from "../../assets/img/carne-batata.png";
import frangoarroz from "../../assets/img/frango-arroz.png";
import omeletelegumes from "../../assets/img/omelete-legumes.png";
import peixelegumes from "../../assets/img/peixe-legume.png";
import saladafrango from "../../assets/img/salada-frango.png";
import tilapiaabobrinha from "../../assets/img/tilapia-abobrinha.png";
import acompanheprogresso from "../../assets/img/acompanhe-progresso.png";
import adicionealimentos from "../../assets/img/adicione-alimentos.png";
import organizerotina from "../../assets/img/organize-rotina.png";

interface Receita {
  id: number;
  nome: string;
  kcal: number;
  imagem: string;
  ingredientes: string[];
  modoPreparo: string;
}

type CategoriaChave = "manutencao" | "superavit" | "deficit";

interface Categoria {
  chave: CategoriaChave;
  titulo: string;
  descricao: string;
  receitas: Receita[];
}

interface Destaque {
  titulo: string;
  descricao: string;
  imagem: string;
}

const destaques: Destaque[] = [
  {
    titulo: "Acompanhe seu progresso",
    descricao:
      "O sistema calcula sua meta diária e compara com as calorias que você já consumiu.",
    imagem: acompanheprogresso,
  },
  {
    titulo: "Organize sua rotina",
    descricao:
      "Crie categorias como café da manhã, almoço e jantar para manter tudo em ordem.",
    imagem: organizerotina,
  },
  {
    titulo: "Adicione seus alimentos",
    descricao:
      "Adicione os alimentos em cada categoria e acompanhe tudo com facilidade.",
    imagem: adicionealimentos,
  },
];

// Cor de destaque de cada categoria (segue a ordem do array `categorias`)
const CORES_CATEGORIA = ["#0E3322", "#CA5030", "#839558"];

const categorias: Categoria[] = [
  {
    chave: "manutencao",
    titulo: "Manutenção Calórica",
    descricao:
      "O consumo de calorias é semelhante ao gasto diário, mantendo o peso corporal estável.",
    receitas: [
      {
        id: 1,
        nome: "Carne com Pure",
        kcal: 450,
        imagem: carnebatata,
        ingredientes: [
          "120 g de carne magra",
          "150 g de pure de batata",
          "Salada de alface",
        ],
        modoPreparo: "Grelhe a carne, prepare o pure e sirva com a salada.",
      },
      {
        id: 2,
        nome: "Peixe com Legumes",
        kcal: 390,
        imagem: peixelegumes,
        ingredientes: [
          "120 g de peixe",
          "100 g de arroz integral",
          "100 g de legumes cozidos",
        ],
        modoPreparo: "Grelhe o peixe, cozinhe o arroz e os legumes e sirva.",
      },
      {
        id: 3,
        nome: "Frango com Arroz",
        kcal: 360,
        imagem: frangoarroz,
        ingredientes: [
          "100 g de frango",
          "80 g de arroz integral",
          "100 g de brócolis",
        ],
        modoPreparo:
          "Grelhe o frango, cozinhe o arroz e o brócolis e sirva juntos.",
      },
    ],
  },
  {
    chave: "superavit",
    titulo: "Superávit Calórico",
    descricao:
      "O consumo de calorias é maior que o gasto diário, favorecendo o ganho de peso e de massa muscular quando aliado a exercícios.",
    receitas: [],
  },
  {
    chave: "deficit",
    titulo: "Déficit Calórico",
    descricao:
      "O consumo de calorias é menor que o gasto diário, fazendo o corpo utilizar suas reservas de energia e contribuindo para a perda de peso.",
    receitas: [
      {
        id: 1,
        nome: "Salada de Frango",
        kcal: 220,
        imagem: saladafrango,
        ingredientes: [
          "100 g de frango grelhado",
          "50 g de alface",
          "50 g de tomate",
          "30 g de cenoura ralada",
        ],
        modoPreparo: "Grelhe o frango, misture com os legumes e sirva.",
      },
      {
        id: 2,
        nome: "Omelete com Legumes",
        kcal: 180,
        imagem: omeletelegumes,
        ingredientes: ["2 ovos", "50 g de espinafre", "50 g de tomate"],
        modoPreparo:
          "Bata os ovos, misture os legumes e sirva.",
      },
      {
        id: 3,
        nome: "Tilapia com Abobrinha",
        kcal: 170,
        imagem: tilapiaabobrinha,
        ingredientes: ["120 g de filé de tilapia", "100 g de abobrinha"],
        modoPreparo: "Grelhe a tilapia, refogue a abobrinha e sirva.",
      },
    ],
  },
];

// Lista única com todas as receitas de todas as categorias, usada pelo carrossel
const receitas: Receita[] = categorias.flatMap((cat) => cat.receitas);

function Home() {
  const [receitaIndex, setReceitaIndex] = useState(0);

  const receita1 = receitas[receitaIndex];
  const receita2 = receitas[(receitaIndex + 1) % receitas.length];

  function receitaAnterior() {
    setReceitaIndex((prev) => (prev - 2 + receitas.length) % receitas.length);
  }

  function proximaReceita() {
    setReceitaIndex((prev) => (prev + 2) % receitas.length);
  }

  return (
    <div className="font-creato text-[#0E3322]">
      {/* Hero */}
      <section className="w-full h-[220px] md:h-[320px] overflow-hidden">
        <img
          src={fundoHome}
          alt="Prateleiras de vegetais frescos"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Introdução */}
      <section className="bg-[#F0F0CF] px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-camera text-6xl md:text-7xl mb-6">fit food</h1>
            <p className="text-sm md:text-base leading-relaxed mb-8">
              Atualmente, a rotina corrida faz com que muitas pessoas escolham
              alimentos apenas pela praticidade, deixando uma alimentação
              equilibrada em segundo plano. Pensando nisso, o Fit Food foi
              criado para ajudar você a cuidar da sua saúde de forma simples.
            </p>
            <Link
              to="/registro-alimentar"
              className="inline-block bg-[#CA5030] text-white font-creato-medium px-8 py-3 rounded-full hover:brightness-95 transition"
            >
              COMECE JÁ
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {destaques.map((item) => (
              <div key={item.titulo} className="flex flex-col">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="w-full h-32 md:h-40 object-cover rounded-t-xl"
                />
                <div className="bg-[#839558] text-center rounded-b-xl p-3 flex-1">
                  <p className="font-camera text-white text-xs md:text-sm mb-1">
                    {item.titulo}
                  </p>
                  <p className="font-creato text-[#0E3322] text-[10px] md:text-xs">
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objetivos calóricos */}
      <section className="bg-[#F0F0CF] px-4 pb-16">
        <h2 className="font-camera text-4xl md:text-5xl text-center mb-12">
          Entenda os objetivos
          <br />
          caloricos
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat, index) => {
            const cor = CORES_CATEGORIA[index % CORES_CATEGORIA.length];
            return (
              <div
                key={cat.chave}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ backgroundColor: cor }}
              >
                <h3 className="text-white text-center font-creato-medium text-lg md:text-xl py-4 px-4">
                  {cat.titulo}
                </h3>
                <div className="bg-[#F5F1D9] text-[#0E3322] text-sm md:text-base leading-relaxed rounded-xl mx-4 mb-4 p-4 flex-1">
                  {cat.descricao}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Perfil Nutricional */}
      <section className="bg-[#839558] py-6 px-4 text-center">
        <h2 className="font-camera text-[#0E3322] text-4xl md:text-5xl mb-3">
          Perfil Nutricional
        </h2>
        <p className="text-[#0E3322] text-sm md:text-base mb-6">
          informe seus dados para realizar sua análise corporal
        </p>
        <Link
          to="/perfil"
          className="inline-block bg-[#CA5030] text-white font-creato-medium px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          faça agora
        </Link>
      </section>

      {/* Receitas */}
      <section className="bg-[#F0F0CF] px-4 pb-16">
        <h2 className="font-camera text-4xl pt-16 md:text-5xl text-center mb-20">
          Receitas
        </h2>

        <div className="max-w-5xl mx-auto flex items-center gap-3 md:gap-6">
          <button
            type="button"
            onClick={receitaAnterior}
            aria-label="Receita anterior"
            className="shrink-0 text-[#0E3322] hover:text-[#CA5030] transition text-3xl md:text-4xl"
          >
            ◀
          </button>

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[receita1, receita2].map((receita) => (
              <div
                key={receita.id}
                className="rounded-2xl overflow-hidden shadow-lg bg-[#839558] flex flex-col sm:flex-row sm:h-80"
              >
                <div className="relative sm:w-2/5 shrink-0 h-48 sm:h-full">
                  <img
                    src={receita.imagem}
                    alt={receita.nome}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/90 text-[#0E3322] px-3 py-1 rounded-full text-xs font-creato-medium">
                    Total: ≈ {receita.kcal} kcal
                  </span>
                </div>

                <div className="text-white p-6 flex-1 overflow-y-auto">
                  <h3 className="font-camera text-2xl mb-3">{receita.nome}</h3>

                  <p className="font-creato-medium mb-2">Ingredientes</p>

                  <ul className="list-disc list-inside text-sm space-y-1 mb-4">
                    {receita.ingredientes.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    ))}
                  </ul>

                  <p className="font-creato-medium mb-2">Modo de preparo</p>

                  <p className="text-sm">{receita.modoPreparo}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={proximaReceita}
            aria-label="Próxima receita"
            className="shrink-0 text-[#0E3322] hover:text-[#CA5030] transition text-3xl md:text-4xl"
          >
            ▶
          </button>
        </div>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-3 mt-6">
          {Array.from({ length: Math.ceil(receitas.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setReceitaIndex(index * 2)}
                aria-label={`Ver receita ${index + 1}`}
                className={`w-3.5 h-3.5 rounded-full transition ${
                  index === Math.floor(receitaIndex / 2)
                    ? "bg-[#0E3322]"
                    : "bg-[#839558]/60"
                }`}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
