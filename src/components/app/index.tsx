import Global from '@/style/global'
import { Normalize } from 'styled-normalize'
import Follow from '../Acompanhamento'
import BarraLateral from '../BarraLateral'

import IdentificaçãoPaciente from '../IdentificaçãoPaciente'

import Search from '../Pesquisa'

function App() {
  return (
    <div className="App">
      <Global />
      <Normalize />
      <BarraLateral />
      <Search />
      <IdentificaçãoPaciente />
      <Follow />
    </div>
  )
}

export default App
