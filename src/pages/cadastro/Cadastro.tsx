function Cadastro() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 h-screen place-items-center font-bold bg-[#f0f0cf]">
        <div className="bg-[url('https://i.imgur.com/KqZSJ6n.png')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center"></div>
        <form className="flex justify-center items-center flex-col w-13/14 gap-3 col-span-3 bg-[#839558] rounded-2xl p-5">
          <h1 className="font-camera text-[#ca5030] text-6xl items-center flex-col w-2/3 gap-3 text-center">
            Cadastro
          </h1>
          <p className="text-[#0e3322] text-center font-creato">
            Crie sua conta e comece hoje a construir uma vida mais saudável
          </p>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome"
              className="rounded-2xl p-2 bg-[#f0f0cf]"
            />
          </div>

          <div className="flex flex-col w-full">
             <input
              type="email"
              name="usuario"
              id="usuario"
              placeholder="Email"
              className="bg-[#f0f0cf] rounded-2xl p-2"
            />
          </div>

          <div className="flex flex-col w-full">     
            <input
              type="text"
              name="foto"
              id="foto"
              placeholder="Cole o link da sua foto"
              className="bg-[#f0f0cf] rounded-2xl p-2"
            />
          </div>

          <div className="grid grid-cols-2 w-full gap-2">
          <div className="flex flex-col w-full">
            <input
              type="password"
              name="senha"
              id="senha"
              placeholder="Senha"
              className="bg-[#f0f0cf] rounded-2xl p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <input
              type="password"
              name="confirmarSenha"
              id="confirmarSenha"
              placeholder="Confirmar senha"
              className="bg-[#f0f0cf] rounded-2xl p-2"
            />
          </div>
          </div>

                    <div className="grid grid-cols-2 w-full gap-2">
          <div className="flex flex-col w-full">
            <input
              type="type"
              name="altura"
              id="altura"
              placeholder="Altura em cm"
              className="bg-[#f0f0cf] rounded-2xl p-2"
            />
          </div>

          <div className="flex flex-col w-full">
            <input
              type="type"
              name="peso"
              id="peso"
              placeholder="Peso"
              className="bg-[#f0f0cf] rounded-2xl p-2"
            />
          </div>
          </div>
            <div className="grid grid-cols-3 gap-20 mt-3">
            <div className="flex flex-col w-full font-creato text-[#0e3322]">
            <p>Objetivo:</p>
           <label> <input type="radio" name="objetivo" id="emagrecer"/> Emagrecimento</label>
           <label> <input type="radio" name="objetivo" id="hipertrofia"/> Hipertrofia</label>
           <label> <input type="radio" name="objetivo" id="manutencao"/> Manutenção</label>
          </div>

           <div className="flex flex-col w-full font-creato text-[#0e3322]">
            <p>Atividade Física:</p>
           <label> <input type="radio" name="atividade" id="sedentario"/> Sedentário</label>
           <label> <input type="radio" name="atividade" id="moderada"/> Moderada</label>
           <label> <input type="radio" name="atividade" id="ativo"/> Muito ativo</label>
          </div>

           <div className="flex flex-col w-full font-creato text-[#0e3322]">
            <p>Sexo:</p>
           <label> <input type="radio" name="sexo" id="sedentario"/> Feminino</label>
           <label> <input type="radio" name="sexo" id="moderada"/> Masculino</label>
          </div>
            </div>
         

          <div className="flex justify-around w-full gap-8">
           
            <button
              type="submit"
              className="rounded-3xl cursor-pointer text-white bg-[#ca5030] hover:bg-[#f7613b] w-1/2 py-2 flex justify-center"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Cadastro;
