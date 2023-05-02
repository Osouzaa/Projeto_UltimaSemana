import ItensSaude from '@/utils/Saude'
import TitleAvaliação from '../TitleAvaliação'
import S from './style'

const Saude = () => {


  return (
    <>
      <TitleAvaliação>Saúde</TitleAvaliação>

      <S.ContainerGeral>
        {ItensSaude.map(item => (
          <S.ContainerInputs key={item.id}>
            <S.TitleItens>{item.title}</S.TitleItens>
            {!item.options && !item.Answers && (
              <>
                <S.InputsLabel>
                  <input type="radio" id={`${item.id}-sim`} />
                  <label htmlFor={`${item.id}-sim`}>Sim</label>
                </S.InputsLabel>
                <S.InputsLabel>
                  <input type="radio" id={`${item.id}-nao`} />
                  <label htmlFor={`${item.id}-nao`}>Não</label>
                </S.InputsLabel>
              </>
            )}
            {item.options && (
              <S.ContentOption>
                {item.options.map(option => (
                  <S.InputsLabel key={option}>
                    <input type="radio" id={`${item.id}-${option}`} name={`${item.id}`} value={option} />
                    <label htmlFor={`${item.id}-${option}`}>{option}</label>
                  </S.InputsLabel>
                ))}
              </S.ContentOption>
            )}
            {item.textplaceholder && (
              <S.ContentPorque>
                <label htmlFor={`${item.id}-porque`}>{item.textplaceholder}</label>
                <input type="text" placeholder="Resposta" />
              </S.ContentPorque>
            )}
          </S.ContainerInputs>
        ))}
      </S.ContainerGeral>
    </>
  )
}

export default Saude
