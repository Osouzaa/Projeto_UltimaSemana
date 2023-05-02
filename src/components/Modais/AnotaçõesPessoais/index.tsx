import Demo from '@/components/EditorText'
import { Dispatch, SetStateAction, useState } from 'react'
import FecharModal from '@/icons/Fechar Modal.svg'
import S from './style'
import EditTextPessoais from '@/components/EditTextPessoais'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const AnotaçõesPessoais = ({ open, setOpen }: Props) => {
  const fecharModal = () => {
    setOpen(false)
  }
  const Container = open ? 'expanded' : ''
  return (
    <>
      <S.Container className={Container}>
        <S.ContentTitle>
          <h3>Anotações Pessoais</h3>
          <img src={FecharModal} alt="" onClick={fecharModal} />
        </S.ContentTitle>
        <EditTextPessoais />
        <S.ContainerFooter>
          <S.ContainerButtons>
            <span>Cancelar</span>
            <button>Criar</button>
          </S.ContainerButtons>
        </S.ContainerFooter>
      </S.Container>
    </>
  )
}
export default AnotaçõesPessoais
