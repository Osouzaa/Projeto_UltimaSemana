import ItensHistorico from '@/utils/HistoricoFamiliar'
import TitleAvaliação from '../TitleAvaliação'
import S from './style'

const HistoricoFamiliar = () => {
  return (
    <>
      <TitleAvaliação>Histórico familiar</TitleAvaliação>

      <S.ContainerGeral>
        {ItensHistorico.map(item => (
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
            {item.textplaceholder && (
              <S.ContentPorque>
                <label htmlFor={`${item.id}-porque`}>{item.textplaceholder}</label>
                <input type="text" placeholder="Resposta" />
              </S.ContentPorque>
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
          </S.ContainerInputs>
        ))}
      </S.ContainerGeral>
    </>
  )
}

export default HistoricoFamiliar
