import S from './style'
import SalvarBTN from '@/icons/BtnSalvar.png'
import Seta from '@/icons/Seta (2).svg'
import { useLocation, useNavigate } from 'react-router-dom'

type Props = {
  handleClick?: () => void
}

const Buttons = ({ handleClick }: Props) => {
  const location = useLocation()
  const Navigate = useNavigate()

  return (
    <S.ContainerButtons>
      <S.ButtonBase onClick={handleClick}>
        <img src={SalvarBTN} alt="" />
        <span>Salvar</span>
      </S.ButtonBase>
      {location.pathname !== '/Salvar' && (
        <S.Button
          onClick={() => (location.pathname === '/AplicacaoTeste' ? Navigate('/Salvar') : Navigate('/AplicacaoTeste'))}
        >
          Pular
          <img src={Seta} alt="" />
        </S.Button>
      )}
    </S.ContainerButtons>
  )
}

export default Buttons
