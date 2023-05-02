import S from './style'
import FecharModal from '@/icons/Fechar Modal.svg'

import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const ModalAvalição = ({ open, setOpen }: Props) => {
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
              <h3>Novo Fato Relevante</h3>
              <img src={FecharModal} alt="" onClick={fecharModal} />
            </S.ContentTitle>
            <S.ContentInputs>
              <S.ContainerLabel>
                <label htmlFor="date">Data*</label>
                <S.InputDate type="date" id="Data" />
              </S.ContainerLabel>
            </S.ContentInputs>
            <S.ContainerAtencao>
              <h4>Atenção!</h4>
              <p>
                Você será <em>redirecionado para uma nova página</em> onde irá preencher os dados da avaliação
                psicológica.
              </p>
            </S.ContainerAtencao>

            <S.ContainerFooter>
              <p>*Campos obrigatórios</p>
              <S.ContainerButtons>
                <span>Cancelar</span>
                <button>
                  <Link to="/Avaliação"> Prosseguir</Link>
                </button>
              </S.ContainerButtons>
            </S.ContainerFooter>
          </S.Container>
        </S.Modal>
      )}
    </div>
  )
}

export default ModalAvalição
