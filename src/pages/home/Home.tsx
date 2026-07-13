import { useState } from "react";
import { Link } from "react-router-dom";
import fundoHome from "../../assets/img/fundo-home.png";
import gptHome from "../../assets/img/gpt-home.png";

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


function imagemPlaceholder(nome: string): string {
  return `https://placehold.co/600x400?text=${encodeURIComponent(nome)}`;
}

const categorias: Categoria[] = [
  {
    chave: "manutencao",
    titulo: "Manutenção Calórica",
    descricao:
      "O consumo de calorias é semelhante ao gasto diário, mantendo o peso corporal estável.",
    receitas: [
      {
        id: 1,
        nome: "Carne com Purê",
        kcal: 450,
        imagem: imagemPlaceholder("Carne com Purê"),  //<--- import da imagem aqui
        ingredientes: [
          "120 g de carne magra",
          "150 g de purê de batata",
          "Salada de alface",
        ],
        modoPreparo: "Grelhe a carne, prepare o purê e sirva com a salada.",
      },
      {
        id: 2,
        nome: "Peixe com Legumes",
        kcal: 390,
        imagem: imagemPlaceholder("Peixe com Legumes"),
        ingredientes: [
          "120 g de peixe",
          "100 g de arroz integral",
          "100 g de legumes cozidos",
        ],
        modoPreparo:
          "Grelhe o peixe, cozinhe o arroz e os legumes e sirva.",
      },
      {
        id: 3,
        nome: "Frango com Arroz",
        kcal: 360,
        imagem: imagemPlaceholder("Frango com Arroz"),
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
    receitas: [
      {
        id: 1,
        nome: "Frango com Batata-Doce",
        kcal: 600,
        imagem: imagemPlaceholder("Frango com Batata-Doce"),
        ingredientes: [
          "150 g de frango",
          "200 g de batata-doce",
          "1 colher de sopa de azeite",
        ],
        modoPreparo:
          "Grelhe o frango, cozinhe a batata-doce e finalize com azeite.",
      },
      {
        id: 2,
        nome: "Macarrão com Carne Moída",
        kcal: 650,
        imagem: imagemPlaceholder("Macarrão com Carne Moída"),
        ingredientes: [
          "120 g de macarrão",
          "120 g de carne moída",
          "Molho de tomate",
        ],
        modoPreparo: "Cozinhe o macarrão, prepare a carne com o molho e misture.",
      },
      {
        id: 3,
        nome: "Vitamina de Banana",
        kcal: 540,
        imagem: imagemPlaceholder("Vitamina de Banana"),
        ingredientes: [
          "2 bananas",
          "300 ml de leite",
          "2 colheres de aveia",
          "1 colher de sopa de pasta de amendoim",
        ],
        modoPreparo: "Bata todos os ingredientes no liquidificador.",
      },
    ],
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
        imagem: imagemPlaceholder("Salada de Frango"),
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
        imagem: imagemPlaceholder("Omelete com Legumes"),
        ingredientes: ["2 ovos", "50 g de espinafre", "50 g de tomate"],
        modoPreparo:
          "Bata os ovos, misture os legumes e cozinhe em uma frigideira antiaderente.",
      },
      {
        id: 3,
        nome: "Tilápia com Abobrinha",
        kcal: 170,
        imagem: imagemPlaceholder("Tilápia com Abobrinha"),
        ingredientes: ["120 g de filé de tilápia", "100 g de abobrinha"],
        modoPreparo: "Grelhe a tilápia, refogue a abobrinha e sirva.",
      },
    ],
  },
];

function Home() {
  const [categoriaAtual, setCategoriaAtual] =
    useState<CategoriaChave>("manutencao");
  const [receitaIndex, setReceitaIndex] = useState(0);

  const categoria = categorias.find((c) => c.chave === categoriaAtual)!;
  const receita = categoria.receitas[receitaIndex];

  function selecionarCategoria(chave: CategoriaChave) {
    setCategoriaAtual(chave);
    setReceitaIndex(0);
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
      <section className="bg-[#F0F0CF] px-4 py-16 text-center">
        <h1 className="font-camera text-6xl md:text-7xl mb-6">fit food</h1>
        <p className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed mb-8">
          Atualmente, a rotina corrida faz com que muitas pessoas escolham
          alimentos apenas pela praticidade, deixando uma alimentação
          equilibrada em segundo plano. Pensando nisso, o Fit Food foi criado
          para ajudar você a cuidar da sua saúde de forma simples. Ao cadastrar
          suas informações, calculamos sua necessidade calórica diária.
          Depois, você pode registrar os alimentos consumidos e acompanhar a
          comparação entre as calorias ingeridas e a quantidade ideal para
          seus objetivos, tornando o controle da alimentação mais fácil e
          consciente.
        </p>
        <Link
          to="/cadastro"
          className="inline-block bg-[#CA5030] text-white font-creato-medium px-8 py-3 rounded-full hover:brightness-95 transition"
        >
          COMECE JÁ
        </Link>
      </section>

      {/* Objetivos calóricos */}
      <section className="bg-[#F0F0CF] px-4 pb-16">
        <h2 className="font-camera text-4xl md:text-5xl text-center mb-12">
          Entenda os objetivos
          <br />
          caloricos
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <button
              key={cat.chave}
              type="button"
              onClick={() => selecionarCategoria(cat.chave)}
              className="text-center text-left focus:outline-none group"
            >
              <h3 className="text-xl mb-4 text-center">{cat.titulo}</h3>
              <div
                className={`bg-[#839558] text-white rounded-2xl p-6 h-full transition ring-offset-2 ${
                  categoriaAtual === cat.chave
                    ? "ring-4 ring-[#CA5030]"
                    : "ring-0 group-hover:brightness-95"
                }`}
              >
                {cat.descricao}
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-sm mt-4 opacity-70">
          Clique em uma das opções acima para ver as receitas indicadas para
          esse objetivo.
        </p>
      </section>

      {/* Receitas */}
      <section className="bg-[#F0F0CF] px-4 pb-16">
        <h2 className="font-camera text-4xl md:text-5xl text-center mb-2">
          Receitas
        </h2>
        <p className="text-center text-sm mb-8 opacity-80">{categoria.titulo}</p>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2 bg-[#839558]">
          <img
            src={receita.imagem}
            alt={receita.nome}
            className="w-full h-72 md:h-full object-cover"
          />

          <div className="text-white p-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-camera text-3xl">{receita.nome}</h3>
              <span className="bg-[#0E3322] text-sm px-4 py-1.5 rounded-full whitespace-nowrap">
                Total: ≈ {receita.kcal} kcal
              </span>
            </div>

            <div>
              <p className="font-creato-medium mb-1">Ingredientes:</p>
              <ul className="list-disc list-inside text-sm space-y-1">
                {receita.ingredientes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-creato-medium mb-1">Modo de preparo:</p>
              <p className="text-sm">{receita.modoPreparo}</p>
            </div>
          </div>
        </div>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-3 mt-6">
          {categoria.receitas.map((_, index) => (
            <button
              key={index}
              onClick={() => setReceitaIndex(index)}
              aria-label={`Ver receita ${index + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition ${
                index === receitaIndex ? "bg-[#0E3322]" : "bg-[#839558]/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Sobre nós */}
      <section className="bg-[#F0F0CF] px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-camera text-4xl md:text-5xl mb-4">
              Sobre nos
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md">
              Somos uma equipe de desenvolvedores Java Full Stack formada
              durante o bootcamp da Generation Brasil. Unimos nossos
              conhecimentos para criar o Fit Food, um projeto que incentiva
              hábitos alimentares mais saudáveis por meio da tecnologia,
              tornando o acompanhamento da alimentação simples, prático e
              acessível.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src={gptHome}
              alt="Equipe Fit Food"
              className="w-full max-w-md rounded-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
