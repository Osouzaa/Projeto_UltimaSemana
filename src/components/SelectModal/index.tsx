import Seta from '@/icons/3pontos/Ponto.svg'
import { useState } from 'react'
import S from './style'

const SelectFiltro = () => {
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const options = ['Todos', 'Sessão', 'Fato Relevante', 'Anexo', 'Avaliação Psicológica']

  const handleItemClick = (id: number, index: number) => {
    if (id === 1) {
      setShowOptions(true)
    } else {
      setSelectedOptionIndex(index)
      setShowOptions(false)
    }
  }

  return (
    <div>
      <S.Select onClick={() => handleItemClick(1, 0)}>
        <p>{options[selectedOptionIndex]}</p>
        <img src={Seta} alt="" />
      </S.Select>
      {showOptions && (
        <S.ContentModal>
          {options.map((option, index) => (
            <p
              key={index}
              onClick={() => handleItemClick(2, index)}
              className={selectedOptionIndex === index ? 'selected' : ''}
            >
              {option}
            </p>
          ))}
        </S.ContentModal>
      )}
    </div>
  )
}

export default SelectFiltro
