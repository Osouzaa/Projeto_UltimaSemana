import App from '@/components/app'
import Template from '@/components/template'
import AplicacaoTeste from '@/pages/AplicacaoTeste'
import Login from '@/pages/Login'
import PagePsicologica from '@/pages/Psicologica'
import Salvar from '@/pages/Salvar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes location={location}>
        <Route path="/" element={<Login />} />
        <Route element={<Template />}>
          <Route path="/App" element={<App />} />
          <Route path="/Avaliação" element={<PagePsicologica />} />
          <Route path="/AplicacaoTeste" element={<AplicacaoTeste />} />
          <Route path="/Salvar" element={<Salvar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
