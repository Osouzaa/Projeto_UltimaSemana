import HeaderPageTwo from '@/components/HeaderPageTwo'
import S from './style'
import Global from '@/style/global'
import Demo from '@/components/EditorText'
import Buttons from '@/components/Buttons'
import { useState } from 'react'
import ModalSalvar from '@/components/Modais/ModalSalvo'

const Salvar = () => {
  const [openSessao, setOpenSessao] = useState(false)

  const handleClick = () => {
    setOpenSessao(!openSessao)
  }
  return (
    <>
      <Global />
      <S.Container>
        <div>
          <HeaderPageTwo handleClick={handleClick}>Observação Comportamental</HeaderPageTwo>
        </div>

        <S.ContentDiv>
          <h3>Síntese das observações comportamentais</h3>
          <div>
            <Demo />
          </div>
        </S.ContentDiv>

        <Buttons handleClick={handleClick} />
      </S.Container>

      <ModalSalvar open={openSessao} setOpen={setOpenSessao} />
    </>
  )
}

export default Salvar
