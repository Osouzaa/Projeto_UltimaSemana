import { Dispatch, SetStateAction } from 'react'
import S from './style'

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

const FooterModdais = ({ setOpen }: Props) => {
  const fecharModal = () => {
    setOpen(false)
  }

  return (
    <S.ContainerFooter>
      <p>*Campos obrigatórios</p>
      <S.ContainerButtons>
        <span onClick={fecharModal}>Cancelar</span>
        <button>Criar</button>
      </S.ContainerButtons>
    </S.ContainerFooter>
  )
}

export default FooterModdais
