import ItensAtividadesRemuneradas from '@/utils/AtividadeRemunerada'
import TitleAvaliação from '../TitleAvaliação'
import S from './style'

const AtividadeRemunerada = () => {
  return (
    <>
      <TitleAvaliação>Complementos para atividade remunerada como condutor</TitleAvaliação>

      <S.ContainerGeral>
        {ItensAtividadesRemuneradas.map(item => (
          <S.ContainerInputs key={item.id}>
            <S.TitleItens>{item.title}</S.TitleItens>
            {!item.Answers && (
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
          </S.ContainerInputs>
        ))}
      </S.ContainerGeral>
    </>
  )
}

export default AtividadeRemunerada
