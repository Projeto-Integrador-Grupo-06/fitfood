import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Perfil from "./pages/Perfil/perfil";
import Cadastro from "./pages/cadastro/Cadastro";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0CF]">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Perfil />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
