import { Normalize } from 'styled-normalize'
import BarraLateral from '../BarraLateral'
import { Outlet, useLocation } from 'react-router-dom'
import Arrows from '../ContainerArrows'

const Template = () => {
  const location = useLocation()

  return (
    <div className="App">
      <Normalize />
      <BarraLateral />
      {location.pathname !== '/' && location.pathname !== '/App' && location.pathname !== '/app' && <Arrows />}
      <Outlet />
    </div>
  )
}

export default Template
