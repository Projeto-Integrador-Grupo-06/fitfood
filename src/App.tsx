import { Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

import Perfil from "./pages/Perfil/Perfil";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import RegistroAlimentar from "./pages/registroalimentar/RegistroAlimentar";
import Sobre from "./pages/sobre/Sobre";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slides from './pages/slides/Slides'
import Footer from "./components/footer/Footer";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const esconderLayout = ["/", "/cadastro"].includes(location.pathname)

  if (esconderLayout) {
    return <main className="flex-1">{children}</main>
  }
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <AuthProvider>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
      <div className="min-h-screen flex flex-col bg-[#F0F0CF]">
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/registro-alimentar" element={<RegistroAlimentar />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/apresentacao" element={<Slides />} />
          </Routes>
        </Layout>
      </div>
    </AuthProvider>
  );
}
export default App;
