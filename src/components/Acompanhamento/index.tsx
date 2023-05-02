import { useState } from 'react'
import Edit from '../../icons/Edit.svg'
import HoverEdit from '@/icons/novo (1).svg'
import Lixeira from '../../icons/lixeira.svg'
import LixeiraHover from '../../icons/HoverLixeira.svg'
import Avaliação from '../Serviços'
import Seta from '@/icons/3pontos/down-one.svg'

import S from './style'
import ModalExcluir from '../Modais/ModalExcluir'
import SelectWithOptions from '../SelectModels'

const Follow = () => {
  const [openSessao, setOpenSessao] = useState(false)
  const [EditHover, setEditHover] = useState(false)
  const [lixeiraHover, setLixeiraHover] = useState(false)
  const [showSelect, setShowSelect] = useState(false)

  const handleSelectClick = () => {
    setShowSelect(!showSelect)
  }

  const handleClick = () => {
    setOpenSessao(!openSessao)
  }

  const handleEditHover = () => {
    setEditHover(!EditHover)
  }

  const handleLixeiraHover = () => {
    setLixeiraHover(!lixeiraHover)
  }

  return (
    <S.Container>
      <S.Options>
        <label>
          Serviço:
          <p onClick={handleSelectClick}>
            Novo Acompanhamento
            <img src={Seta} alt="" />
          </p>
        </label>
        {showSelect && <SelectWithOptions />}

        <p>
          <strong>Data Inicial:</strong> 18/10/2022
        </p>
        <S.IconsDelete>
          <img
            src={EditHover ? HoverEdit : Edit}
            alt=""
            onMouseEnter={handleEditHover}
            onMouseLeave={handleEditHover}
          />
          <img
            src={lixeiraHover ? LixeiraHover : Lixeira}
            alt=""
            onClick={handleClick}
            onMouseEnter={handleLixeiraHover}
            onMouseLeave={handleLixeiraHover}
          />
        </S.IconsDelete>
      </S.Options>
      <hr />
      <Avaliação />
      <ModalExcluir open={openSessao} setOpen={setOpenSessao} />
    </S.Container>
  )
}

export default Follow
