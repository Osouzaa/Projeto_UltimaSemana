import S from './style'
import Array from '@/utils/Icones'
import Seta from '@/icons/IconsCard/SETAA.svg'

import { useState } from 'react'
import Header from '../Header'
import React from 'react'

  const BarraLateral = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [isModelListOpen, setIsModelListOpen] = useState(false)
    const [isCadastroListOpen, setIsCadastroListOpen] = useState(false)

    const handleClick = () => {
      setIsExpanded(!isExpanded)
    }

    const handleModelList = () => {
      setIsModelListOpen(!isModelListOpen)
    }

    const handleCadastroList = () => {
      setIsCadastroListOpen(!isCadastroListOpen)
    }

    const ContainerLateral = isExpanded ? 'expanded' : ''

    return (
    <S.ContainerLateral className={ContainerLateral}>
      <S.ContentImagens>
        {Array.map((item, index) => (
          <React.Fragment key={index}>
            <S.Content>
              <div>
                <S.Image src={item.imagem} alt="" />
                {isExpanded && <div>{item.text}</div>}
              </div>
              {isExpanded && item.ListItens && (
                <img
                  src={Seta}
                  alt=""
                  onClick={item.text === 'Modelos' ? handleModelList : handleCadastroList}
                />
              )}
              {item.text === 'Modelos' && isModelListOpen && (
                <div>
                  <S.ContainerList>
                    <S.ULSList>
                      {item.ListItens?.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </S.ULSList>
                  </S.ContainerList>
                </div>
              )}
              {item.text === 'Cadastros' && isCadastroListOpen && (
                <div>
                  <S.ContainerList className="activE">
                    <S.ULSList>
                      {item.ListItens?.map((listItem, index) => (
                        <li key={index}>{listItem}</li>
                      ))}
                    </S.ULSList>
                  </S.ContainerList>
                </div>
              )}
            </S.Content>
          </React.Fragment>
        ))}
      </S.ContentImagens>
      <Header handleClick={handleClick} />
    </S.ContainerLateral>
  )
}

export default BarraLateral