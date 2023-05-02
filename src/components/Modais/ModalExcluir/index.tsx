import { useNavigate } from 'react-router-dom'
import S from './style'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalExcluir = ({ open, setOpen }: Props) => {
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
          <S.TextP>Tem certeza que deseja excluir este serviço?</S.TextP>
        </S.Content>
        <S.ContainerButton>
          <S.Buttons onClick={fecharModal}>Voltar</S.Buttons>
          <S.Button> Apagar</S.Button>
        </S.ContainerButton>
      </S.Container>
    </div>
  )
}

export default ModalExcluir
