import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Perfil from "./pages/perfil/Perfil";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0CF]">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;