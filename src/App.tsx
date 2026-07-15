import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import Perfil from './pages/Perfil/Perfil'
import RegistroAlimentar from './pages/registroalimentar/RegistroAlimentar'
import Sobre from './pages/sobre/Sobre'
import Slides from './pages/slides/Slides'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/registro-alimentar" element={<RegistroAlimentar />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/apresentacao" element={<Slides />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
