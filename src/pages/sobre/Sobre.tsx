import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const equipe = [
  {
    nome: "Isabella Rodrigues",
    funcao: "Full Stack Java • UI/UX Designer",
    imagem: "../src/midia/IsabelaRodrigues.jpg",
    github: "https://github.com/isa01rodrigues",
    linkedin: "https://www.linkedin.com/in/isabelladasilvarodriguesdev/",
    extra: { label: "Portfólio", url: "https://www.instagram.com/bella_stech" },
  },
  {
    nome: "Giovanna Mendes",
    funcao: "Full Stack Java",
    imagem: "../src/midia/GiovannaMendes.jpg",
    github: "https://github.com/GiMendescCodes",
    linkedin: "https://www.linkedin.com/in/giovannasilvamendes/",
    extra: { label: "Portfólio", url: "https://gimendesccodes.github.io/portfolioGen/" },
  },
  {
    nome: "Bianca Casagrande",
    funcao: "Full Stack Java",
    imagem: "../src/midia/BiancaCasagrande.jpg",
    github: "https://github.com/bccasagrande",
    linkedin: "https://www.linkedin.com/in/biancacarvalhocasagrande/",
    extra: { label: "Portfólio", url: "https://www.instagram.com/biancaccasagrande/" },
  },
  {
    nome: "Jhonatan Oliveira",
    funcao: "Full Stack Java",
    imagem: "../src/midia/JhonatanOliveira.jpg",
    github: "https://github.com/JhonatanOliveira18",
    linkedin: "https://www.linkedin.com/in/devjhonatanoliveira/",
    extra: { label: "Portfólio", url: "https://github.com/JhonatanOliveira18" },
  },
  {
    nome: "Dayane Santana",
    funcao: "Full Stack Java",
    imagem: "../src/midia/DayaneSantana.jpg",
    github: "https://github.com/dayanesantana",
    linkedin: "http://linkedin.com/in/dayanesantana59",
    extra: { label: "Portfólio", url: "https://dayanesantana.github.io/meu-portfolio/" },
  },
  {
    nome: "Jackeline Pessoa",
    funcao: "Full Stack Java",
    imagem: "../src/midia/JackelinePessoa.jpg",
    github: "https://github.com/jackeline5458",
    linkedin:
      "https://www.linkedin.com/in/jackelinepessoa?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    extra: { label: "Portfólio", url: "#" },
  },
  {
    nome: "Rafael Scherer",
    funcao: "Full Stack Java",
    imagem: "../src/midia/RafaelScherer.jpg",
    github: "https://github.com/rafaelscherer3",
    linkedin: "https://www.linkedin.com/in/rafaelscherer3/",
    extra: { label: "Portfólio", url: "#" },
  },
];

function Sobre() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-5">
        <img
          className="w-full max-w-[724px] h-auto rounded-[30px] p-5"
          src="../src/midia/Grupo_fitFood.png"
          alt=""
        />
        <div>
          <h1 className="text-[#0E3322] text-justify text-4xl lg:text-7xl font-camera ">
            Generation
          </h1>
          <p className="font-creato text-[#0E3322] text-justify w-full max-w-[490px] pl-2 text-xl">
            Somos uma equipe de desenvolvedores do Bootcamp Java da Generation
            Brasil, reunidos para desenvolver o Fit Food, um projeto que une
            tecnologia e saúde para incentivar hábitos alimentares mais
            saudáveis. Durante o desenvolvimento, colocamos em prática
            conhecimentos em desenvolvimento Full Stack, banco de dados, UI/UX e
            trabalho colaborativo, criando uma solução funcional, intuitiva e
            focada na experiência do usuário
          </p>
        </div>
      </div>

      <section className="w-full lg:w-[95%] bg-[#839558]/70 rounded-none lg:rounded-r-[20px] overflow-hidden mt-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Texto */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-8 sm:px-8 md:px-12 lg:px-14 lg:py-12">
            <h2 className="text-[#0E3322] font-camera text-center lg:text-left text-4xl sm:text-5xl lg:text-6xl mb-6">
              Sobre o Projeto
            </h2>

            <p className="font-creato text-[#0E3322] text-justify text-sm sm:text-base lg:text-lg leading-7">
              O Fit Food é uma plataforma desenvolvida para ajudar pessoas a
              organizarem e acompanharem sua alimentação de forma simples e
              eficiente. O sistema permite registrar as refeições diárias com
              cálculo automático de calorias, acessar receitas saudáveis,
              calcular o Índice de Massa Corporal (IMC) e acompanhar toda a
              evolução alimentar. Com uma interface moderna e intuitiva, o Fit
              Food oferece as ferramentas necessárias para que cada usuário
              monitore seus hábitos, acompanhe seu progresso e tenha mais
              controle sobre sua jornada rumo a uma vida mais saudável.
            </p>
          </div>

          {/* Imagem */}
          <div className="w-full lg:w-1/2 ">
            <img
              src="../src/midia/Logo.png"
              alt="Sobre o Projeto"
              className="w-full h-[350px] sm:h-[350px] lg:h-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mt-20">
        <h2 className="text-[#0E3322] font-camera  text-center p-5 text-4xl md:text-6xl lg:text-7xl">
          Time de Desenvolvedores
        </h2>
        <p className="w-[60%] mx-auto flex items-center justify-center text-center font-creato text-[#0E3322] font-camera text-xl">
          Nosso time é composto por Product Owner (PO), Scrum Master,
          desenvolvedores e equipe de testes, que atuam de forma colaborativa em
          todas as etapas do projeto. Em conjunto, realizamos a prototipação, o
          desenvolvimento das funcionalidades e a validação das entregas, sempre
          seguindo as boas práticas de desenvolvimento ágil, qualidade de
          software e foco na experiência do usuário.
        </p>
      </div>

      <div className="relative flex items-center justify-center bg-[#F6F3D7] py-16 px-4">
        {/* estilo da paginação sobrescrito com a paleta do projeto */}
        <style>{`
          .equipe-swiper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #839558;
            opacity: 0.5;
          }
          .equipe-swiper .swiper-pagination-bullet-active {
            background: #CA5030;
            opacity: 1;
            width: 28px;
            border-radius: 6px;
            transition: width 0.3s ease;
          }
        `}</style>

        <div className="relative w-full max-w-[1200px]">
          {/* Seta anterior */}
          <button
            type="button"
            aria-label="Membro anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-[#FFF8E8] text-[#0E3322] shadow-[0_4px_14px_rgba(14,51,34,0.25)] hover:bg-[#0E3322] hover:text-[#FFF8E8] transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Seta próxima */}
          <button
            type="button"
            aria-label="Próximo membro"
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-[#FFF8E8] text-[#0E3322] shadow-[0_4px_14px_rgba(14,51,34,0.25)] hover:bg-[#0E3322] hover:text-[#FFF8E8] transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <Swiper
            modules={[Pagination, Autoplay]}
            onSwiper={(swiper: SwiperType) => {
              swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            className="equipe-swiper w-full h-[440px]"
          >
            {equipe.map((pessoa) => (
              <SwiperSlide key={pessoa.nome}>
                <div className="w-full min-h-[420px] rounded-[24px] bg-[#BFC693] shadow-[0_18px_40px_-12px_rgba(14,51,34,0.35)] flex flex-col items-center justify-center gap-4 px-8 py-10 text-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-[6px] border-[#0E3322] overflow-hidden shadow-md">
                    <img
                      src={pessoa.imagem}
                      alt={pessoa.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="inline-block w-fit font-creato text-xs tracking-wide uppercase bg-[#0E3322] text-[#FFF8E8] px-3 py-1 rounded-full">
                    {pessoa.funcao}
                  </span>

                  <h2 className="font-camera text-3xl sm:text-4xl text-[#0E3322] leading-tight">
                    {pessoa.nome}
                  </h2>

                  <div className="h-[3px] w-16 bg-[#CA5030] rounded-full" />

                  <div className="flex flex-wrap justify-center gap-3">
                    <a
                      href={pessoa.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-creato text-sm text-[#173E2A] bg-[#F6F3D7] hover:bg-[#0E3322] hover:text-[#FFF8E8] transition-colors duration-300 px-4 py-2 rounded-full"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.42 3.44 10.02 8.2 11.65.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.66-4.04-1.66-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.76.08-.76 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.77-1.66-2.67-.31-5.47-1.37-5.47-6.08 0-1.34.46-2.44 1.22-3.3-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.28-1.59 3.29-1.26 3.29-1.26.65 1.69.24 2.94.12 3.25.76.86 1.22 1.96 1.22 3.3 0 4.72-2.8 5.76-5.48 6.07.43.38.81 1.14.81 2.3 0 1.66-.02 3-.02 3.4 0 .33.22.72.83.6A12.32 12.32 0 0 0 24 12.3C24 5.5 18.63 0 12 0Z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={pessoa.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-creato text-sm text-[#173E2A] bg-[#F6F3D7] hover:bg-[#0E3322] hover:text-[#FFF8E8] transition-colors duration-300 px-4 py-2 rounded-full"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={pessoa.extra.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-creato text-sm text-[#173E2A] bg-[#F6F3D7] hover:bg-[#CA5030] hover:text-[#FFF8E8] transition-colors duration-300 px-4 py-2 rounded-full"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 0 1 6.32 12.9l-9.22-9.22A7.96 7.96 0 0 1 12 4Zm0 16a8 8 0 0 1-6.32-12.9l9.22 9.22A7.96 7.96 0 0 1 12 20Z" />
                      </svg>
                      {pessoa.extra.label}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Sobre;