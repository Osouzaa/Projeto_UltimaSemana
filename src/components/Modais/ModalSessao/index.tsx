import S from './style'
import FecharModal from '@/icons/Fechar Modal.svg'
import FooterModdais from '../FooterModais'
import DadosGerais from './DadosGerais'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalSessao = ({ open, setOpen }: Props) => {
  const fecharModal = () => {
    setOpen(false)
  }

  const Container = open ? 'expanded' : ''
  return (
    <div>
      {open && (
        <S.Modal>
          <S.Container className={Container}>
            <S.ContentTitle>
              <h3>Nova Sessão</h3>
              <img src={FecharModal} alt="" onClick={fecharModal} />
            </S.ContentTitle>
            <div>
              <DadosGerais />
              <S.Linhaa></S.Linhaa>
              <S.DadosGerais>
                <div>2</div>
                <p>Sessão</p>
              </S.DadosGerais>
              <S.ContainerLabel>
                <label htmlFor="title">Título*</label>
                <S.InputTitle type="text" id="title" placeholder="Digite" />
              </S.ContainerLabel>
              <S.ContainerTextArea>
                <label htmlFor="Descriçao">Resumo da sessão*</label>
                <S.InputTextArea id="Descriçao" placeholder="Text"></S.InputTextArea>
              </S.ContainerTextArea>
              <FooterModdais setOpen={setOpen} />
            </div>
          </S.Container>
        </S.Modal>
      )}
    </div>
  )
}

export default ModalSessao
