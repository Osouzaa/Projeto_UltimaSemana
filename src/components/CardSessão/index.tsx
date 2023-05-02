import Section from '@/utils/Seções'
import S from './style'
import CardAnexo from '../CardAnexo'
import CardAvaliação from '../CardAvaliação'
import { useState } from 'react'
import Modal3Pontos from '../Modais/modal3pontos'

type CardState = {
  id: number
  isOpen: boolean
}

const Sections = () => {
  const [cardsState, setCardsState] = useState<CardState[]>(Section.map(item => ({ id: item.id, isOpen: false })))

  const handleCardToggle = (id: number) => {
    const updatedCardsState = cardsState.map(card => {
      if (card.id === id) {
        return { ...card, isOpen: !card.isOpen }
      }
      return card
    })
    setCardsState(updatedCardsState)
  }

  return (
    <>
      {Section.map((item, index) => (
        <S.Container key={index} className={`${item.identi}-bg`}>
          {!(item.id === 1) && <S.Listra className={`${item.identi}-bg`}></S.Listra>}
          <S.Imagem className={`${item.identi}-bg`}>
            <img src={item.icon} alt="" />
          </S.Imagem>
          <S.EditCard onClick={() => handleCardToggle(item.id)}>...</S.EditCard>
          {cardsState.find(card => card.id === item.id)?.isOpen && (
            <div>
              {
                <S.ContainerGeral
                  className={
                    item.title.includes('Documentos')
                      ? 'top-documents'
                      : item.title.includes('Sessão')
                      ? 'top-sessão'
                      : item.title.includes('Avaliação')
                      ? 'top-avaliação'
                      : item.title.includes('Fato')
                      ? 'top-FatoRelevante'
                      : ''
                  }
                  left={item.title.includes('Documentos')}
                >
                  <Modal3Pontos />
                </S.ContainerGeral>
              }
            </div>
          )}
          <S.Content>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </S.Content>
          <p>
            {item.text}
            {item.text?.length >= 305 && <span>Ver mais</span>}
          </p>
          {item.identi === 'purple' && <CardAnexo />}
          {item.identi === 'pink' && <CardAvaliação />}
        </S.Container>
      ))}
    </>
  )
}

export default Sections
