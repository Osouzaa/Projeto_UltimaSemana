import S from './style'
import FecharModal from '@/icons/Fechar Modal.svg'
import FooterModdais from '../FooterModais'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}
const ModalAnexo = ({ open, setOpen }: Props) => {
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
              <h3>Novo Anexo</h3>
              <img src={FecharModal} alt="" onClick={fecharModal} />
            </S.ContentTitle>
            <S.ContentInputs>
              <S.ContainerLabel>
                <label htmlFor="date">Data*</label>
                <S.InputDate type="date" id="Data" />
              </S.ContainerLabel>
              <S.ContainerLabel>
                <label htmlFor="title">Título*</label>
                <S.InputTitle type="text" id="title" placeholder="Digite" />
              </S.ContainerLabel>
            </S.ContentInputs>

            <S.ContainerTextArea>
              <label htmlFor="Descriçao">Descrição*</label>
              <S.InputTextArea id="Descriçao" placeholder="Text"></S.InputTextArea>
            </S.ContainerTextArea>

            <S.ContainerLabel>
              <label htmlFor="Anexo">Anexar arquivos*</label>
              <S.ContentLabel htmlFor="Anexo">
                {' '}
                <p>Escolher arquivo ...</p>{' '}
              </S.ContentLabel>
              <S.InputFile type="file" id="Anexo" />
            </S.ContainerLabel>
            <FooterModdais setOpen={setOpen} />
          </S.Container>
        </S.Modal>
      )}
    </div>
  )
}

export default ModalAnexo
