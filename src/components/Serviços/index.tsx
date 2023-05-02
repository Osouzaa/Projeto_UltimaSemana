import Filtro from '../Filtro'
import Sessao from '@/icons/Sessao.svg'
import Fato from '@/icons/Fato.svg'
import Anexo from '@/icons/Anexo.svg'
import Avaliaçãoo from '@/icons/Avaliação.svg'
import S from './style'
import { useState } from 'react'
import ModalSessao from '../Modais/ModalSessao'
import ModalFatoRelavante from '../Modais/ModalFatoRelevante'
import ModalAnexo from '../Modais/ModalAnexo'
import ModalAvalição from '../Modais/ModalAvaliação'

const Avaliação = () => {
  const [openSessao, setOpenSessao] = useState(false)
  const [openFato, setOpenFato] = useState(false)
  const [openAnexo, setOpenAnexo] = useState(false)
  const [openAvaliacao, setOpenAvaliacao] = useState(false)

  return (
    <>
      <S.Container>
        <S.ContentIcons onClick={() => setOpenSessao(true)}>
          <img src={Sessao} alt="" />
          <p>Sessao</p>
        </S.ContentIcons>
        <S.ContentIcons onClick={() => setOpenFato(true)}>
          <img src={Fato} alt="" />
          <p>Fato relevante</p>
        </S.ContentIcons>
        <S.ContentIcons onClick={() => setOpenAnexo(true)}>
          <img src={Anexo} alt="" />
          <p>Anexo</p>
        </S.ContentIcons>
        <S.ContentIcons onClick={() => setOpenAvaliacao(true)}>
          <img src={Avaliaçãoo} alt="" />
          <p>Avaliação Psicológica</p>
        </S.ContentIcons>
      </S.Container>
      <Filtro />
      <ModalSessao open={openSessao} setOpen={setOpenSessao} />
      <ModalFatoRelavante open={openFato} setOpen={setOpenFato}/>
      <ModalAnexo open={openAnexo} setOpen={setOpenAnexo}/>
      <ModalAvalição open={openAvaliacao} setOpen={setOpenAvaliacao}/>
    </>
  )
}

export default Avaliação
