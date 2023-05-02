import { useNavigate } from 'react-router-dom'
import S from './style'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalSalvar = ({ open, setOpen }: Props) => {
  const Navigate = useNavigate()
  const fecharModal = () => {
    setOpen(false)
    Navigate('/App')
  }

  const Container = open ? 'expanded' : ''
  return (
    <div>
      <S.Container className={Container}>
        <S.ContentTitle></S.ContentTitle>

        <S.Content>
          <S.TextP>Avaliação Psicológica salva com sucesso!</S.TextP>

          <S.Text>Você irá visualizar esta avaliação no prontuário do paciente</S.Text>
        </S.Content>
        <S.ContainerButton>
          <button onClick={fecharModal}>Ok</button>
        </S.ContainerButton>
      </S.Container>
    </div>
  )
}

export default ModalSalvar
