import S from './style'

function SelectWithOptions() {
  return (
    <S.Container>
      <S.ContentInputs>
        <S.ContentRadio>
          <div>
            <S.Marcar></S.Marcar>
          </div>
          <span> Porte de Arma</span>
        </S.ContentRadio>
      </S.ContentInputs>

      <S.ContentInputs>
        <S.ContentRadio className="disable">
          <div></div>
          <span> Adicionar Novo Serviço</span>
        </S.ContentRadio>
      </S.ContentInputs>
    </S.Container>
  )
}

export default SelectWithOptions
