import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Sobre() {
  return (
    <div>
      <h1 className="text-[#0E3322] text-center text-4xl md:text-6xl lg:text-8xl font-camera m-5">
        Sobre o Grupo
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-5">
        <img
          className="w-full max-w-[724px] h-auto rounded-[30px] p-5"
          src="https://i.postimg.cc/VkLnHxrT/z-Embarque-(131).jpg"
          alt=""
        />
        <p className="font-creato text-[#0E3322] text-justify w-full max-w-[490px] lg:pt-36">
          Somos uma equipe de desenvolvedores do Bootcamp Java da Generation
          Brasil, reunidos para desenvolver o Fit Food, um projeto que une
          tecnologia e saúde para incentivar hábitos alimentares mais saudáveis.
          Durante o desenvolvimento, colocamos em prática conhecimentos em
          desenvolvimento Full Stack, banco de dados, UI/UX e trabalho
          colaborativo, criando uma solução funcional, intuitiva e focada na
          experiência do usuário
        </p>
      </div>

      <div className="flex flex-col lg:flex-row bg-[#839558]/70 w-[95%] mx-auto rounded-r-[20px] p-5 gap-8">
        <div className="flex flex-col justify-center  items-center">
          <h2 className="text-[#CA5030] font-camera  pl-2 text-4xl md:text-6xl lg:text-7xl">
            Sobre o projeto
          </h2>
          <p className="text-justify p-5  m-5 w-[60%]  font-Creato">
            O Fit Food é uma plataforma desenvolvida para ajudar pessoas a
            organizarem e acompanharem sua alimentação de forma simples e
            eficiente.O sistema permite registrar as refeições diárias com
            cálculo automático de calorias, acessar receitas saudáveis, calcular
            o Índice de Massa Corporal (IMC) e acompanhar toda a evolução
            alimentar. Com uma interface moderna e intuitiva, o Fit Food oferece
            as ferramentas necessárias para que cada usuário monitore seus
            hábitos, acompanhe seu progresso e tenha mais controle sobre sua
            jornada rumo a uma vida mais saudável.
          </p>
        </div>
        <img
          className="w-4xl"
          src="https://i.postimg.cc/gkzz7B0R/logo-fitfood.png"
          alt=""
        />
      </div>

    <div>
        <h2 className="text-[#0E3322] font-camera  text-center p-5 text-4xl md:text-6xl lg:text-7xl">
        Time de Desenvolvedores
      </h2>
      <p className="w-[60%] mx-auto flex items-center justify-center text-center font-creato text-[#0E3322] font-camera">
        Nosso time  é composto por Product Owner (PO), Scrum
        Master, desenvolvedores e equipe de testes, que atuam de forma
        colaborativa em todas as etapas do projeto. Em conjunto, realizamos a
        prototipação, o desenvolvimento das funcionalidades e a validação das
        entregas, sempre seguindo as boas práticas de desenvolvimento ágil,
        qualidade de software e foco na experiência do usuário.
      </p>
    </div>

      <div className="flex items-center justify-center bg-[#F6F3D7] py-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="w-[1200px] h-[450px] equipe-swiper"
        >
          {/*Isabella*/}
          <SwiperSlide>
            <div
              className="  w-full
                min-h-[450px]
                bg-[#BFC693]
                rounded-[20px]
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                px-6
                md:px-10
                lg:px-16
                py-8
                gap-8
                lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                      h-52
                      sm:w-60
                      sm:h-60
                      md:w-72
                      md:h-72
                      lg:w-[350px]
                      lg:h-[350px]
                      rounded-[10px]
                      object-cover"
                  src="https://i.postimg.cc/SQHMBM5Q/Isabela-Rodrigues-(2).jpg"
                  alt="Isabella Rodrigues"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Isabella Rodrigues
                </h2>

                <p className="text-[#173E2A] font-creato">
                  Full Stack Java • UI/UX Designer
                </p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/isa01rodrigues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="https://www.linkedin.com/in/isabelladasilvarodriguesdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="https://www.instagram.com/bella_stech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/*Giovanna Mendes*/}
          <SwiperSlide>
            <div
              className="  w-full
                  min-h-[450px]
                  bg-[#BFC693]
                  rounded-[20px]
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  justify-center
                  px-6
                  md:px-10
                  lg:px-16
                  py-8
                  gap-8
                  lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                    h-52
                    sm:w-60
                    sm:h-60
                    md:w-72
                    md:h-72
                    lg:w-[350px]
                    lg:h-[350px]
                    rounded-[10px]
                    object-cover"
                  src="https://cdn.discordapp.com/attachments/1489362734075084948/1526936712314490940/ChatGPT_Image_16_de_jun._de_2026_19_04_50.png?ex=6a5a27a1&is=6a58d621&hm=2c43f098704e04272ba564e43d1c70f252af9837ccac1bc99adaea6655b310a4"
                  alt="Giovanna Mendes"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Giovanna Mendes
                </h2>

                <p className="text-[#173E2A] font-creato">Full Stack Java •</p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/GiMendescCodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="https://www.linkedin.com/in/giovannasilvamendes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="hhttps://gimendesccodes.github.io/portfolioGen/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/*Bianca Casagrande*/}
          <SwiperSlide>
            <div
                          className="  w-full
                min-h-[450px]
                bg-[#BFC693]
                rounded-[20px]
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                px-6
                md:px-10
                lg:px-16
                py-8
                gap-8
                lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                    h-52
                    sm:w-60
                    sm:h-60
                    md:w-72
                    md:h-72
                    lg:w-[350px]
                    lg:h-[350px]
                    rounded-[10px]
                    object-cover"
                  src="https://cdn.discordapp.com/attachments/1489362734075084948/1526958887243092006/1718278353455.jpeg?ex=6a58eac8&is=6a579948&hm=1a400b20bcf0faa945054cccea5ad4d8dbcc7777de170092646cda88eca6e93c"
                  alt="Bianca Casagrande"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Bianca Casagrande
                </h2>

                <p className="text-[#173E2A] font-creato">Full Stack Java •</p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/bccasagrande"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="https://www.linkedin.com/in/biancacarvalhocasagrande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="https://www.instagram.com/biancaccasagrande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/*Jhonatan Oliveira*/}
          <SwiperSlide>
            <div
              className="  w-full
                min-h-[450px]
                bg-[#BFC693]
                rounded-[20px]
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                px-6
                md:px-10
                lg:px-16
                py-8
                gap-8
                lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                  h-52
                  sm:w-60
                  sm:h-60
                  md:w-72
                  md:h-72
                  lg:w-[350px]
                  lg:h-[350px]
                  rounded-[10px]
                  object-cover"
                  src="https://cdn.discordapp.com/attachments/1489362734075084948/1526958526839263242/Copia_de_Jhonaton_Oliveira_3.jpg?ex=6a58ea72&is=6a5798f2&hm=d0a05756139b6e2fcce2114bfcf0d7b7b2d8d537fd67c10ea307a6734f579233"
                  alt="Jhonatan Oliveira"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Jhonatan Oliveira
                </h2>

                <p className="text-[#173E2A] font-creato">Full Stack Java •</p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/JhonatanOliveira18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="https://www.linkedin.com/in/devjhonatanoliveira/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="https://www.instagram.com/biancaccasagrande/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/*Dayane Santana*/}
          <SwiperSlide>
            <div
              className="  w-full
                min-h-[450px]
                bg-[#BFC693]
                rounded-[20px]
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                px-6
                md:px-10
                lg:px-16
                py-8
                gap-8
                lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                    h-52
                    sm:w-60
                    sm:h-60
                    md:w-72
                    md:h-72
                    lg:w-[350px]
                    lg:h-[350px]
                    rounded-[10px]
                    object-cover"
                  src="https://avatars.githubusercontent.com/u/247451997?v=4%3Fs%3D400"
                  alt="Dayane Santana"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Dayane Santana
                </h2>

                <p className="text-[#173E2A] font-creato">Full Stack Java •</p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/dayanesantana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="http://linkedin.com/in/dayanesantana59"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="https://dayanesantana.github.io/meu-portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/*Jackeline Pessoa*/}
          <SwiperSlide>
            <div
              className="  w-full
                min-h-[450px]
                bg-[#BFC693]
                rounded-[20px]
                flex
                flex-col
                lg:flex-row
                items-center
                justify-center
                px-6
                md:px-10
                lg:px-16
                py-8
                gap-8
                lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                      h-52
                      sm:w-60
                      sm:h-60
                      md:w-72
                      md:h-72
                      lg:w-[350px]
                      lg:h-[350px]
                      rounded-[10px]
                      object-cover"
                  src="https://cdn.discordapp.com/attachments/1489362734075084948/1526939990884483182/IMG_3645.jpg?ex=6a5a2aaf&is=6a58d92f&hm=0d3e21fd8498d8b91bea07cb5fdbec489d7b3d26940a85e058159a3767875e30"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Jackeline Pessoa
                </h2>

                <p className="text-[#173E2A] font-creato">Full Stack Java •</p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/jackeline5458"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="https://www.linkedin.com/in/jackelinepessoa?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/*Rafael */}
          <SwiperSlide>
            <div
              className="  w-full
                  min-h-[450px]
                  bg-[#BFC693]
                  rounded-[20px]
                  flex
                  flex-col
                  lg:flex-row
                  items-center
                  justify-center
                  px-6
                  md:px-10
                  lg:px-16
                  py-8
                  gap-8
                  lg:gap-20"
            >
              <div className="shadow-lg rounded-md flex-shrink-0">
                <img
                  className="w-52
                    h-52
                    sm:w-60
                    sm:h-60
                    md:w-72
                    md:h-72
                    lg:w-[350px]
                    lg:h-[350px]
                    rounded-[10px]
                    object-cover"
                  src="https://cdn.discordapp.com/attachments/1489362734075084948/1526937695388172288/WhatsApp_Image_2026-07-15_at_10.04.12.jpeg?ex=6a5a288b&is=6a58d70b&hm=e72295ed9e884d65b196edbbfdbba9bcb8398a7c7188357584a1fe96515eaf4c"
                  alt="Rafael Scherer"
                />
              </div>

              <div className="flex flex-col justify-center flex-1">
                <h2 className="font-camera text-5xl text-[#FFF8E8] mb-1.5">
                  Rafael Scherer
                </h2>

                <p className="text-[#173E2A] font-creato">Full Stack Java •</p>

                <div className="font-creato text-lg text-[#173E2A] space-y-2">
                  <a
                    href="https://github.com/rafaelscherer3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    GitHub |
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rafaelscherer3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    LinkedIn |
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#CA5030] transition-colors duration-300 p-1.5"
                  >
                    Portfólio
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Sobre;
