import PersonalidadeTest from '@/utils/Personalidade'
import S from './style'
import Lixeira from '@/icons/lixeira.svg'
import React from 'react'

const Personalidade = () => {
  return (
    <S.Card>
      <S.ContentTitle>
        <h3>Personalidade</h3>
        <img src={Lixeira} alt="" />
      </S.ContentTitle>

      <div>
        {PersonalidadeTest.map((input, index) => (
          <React.Fragment key={index}>
            <S.DivContent>
              {input.inputTopo.map((inputTopoItem, inputTopoIndex) => (
                <S.ContentInput key={inputTopoIndex}>
                  <label htmlFor="">{inputTopoItem.label}</label>
                  <input type={inputTopoItem.type} />
                </S.ContentInput>
              ))}
            </S.DivContent>
            <S.ContentPai>
              <S.ContentInputsPai>
                {input.inputsRight.map((inputRightItem, inputRightIndex) => (
                  <div key={inputRightIndex}>
                    <S.ContentInput>
                      <label htmlFor="">{inputRightItem.label}</label>
                      <input type={inputRightItem.type} />
                    </S.ContentInput>
                  </div>
                ))}
              </S.ContentInputsPai>
              <S.ContentInputsPai>
                {input.inputsLeft.map((inputLeftItem, inputLeftIndex) => (
                  <div key={inputLeftIndex}>
                    <S.ContentInput>
                      <label htmlFor="">{inputLeftItem.label}</label>
                      <input type={inputLeftItem.type} />
                    </S.ContentInput>
                  </div>
                ))}
              </S.ContentInputsPai>
            </S.ContentPai>
          </React.Fragment>
        ))}
      </div>
    </S.Card>
  )
}

export default Personalidade
