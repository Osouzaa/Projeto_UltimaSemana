import S from './style'

const DadosGerais = () => {
  return (
    <>
      <S.DadosGerais>
        <div>1</div>
        <p>Dados Gerais</p>
      </S.DadosGerais>
      <S.ContentInputs>
        <S.ContainerLabel>
          <label htmlFor="date">Data*</label>
          <S.InputDate type="date" id="Data" />
        </S.ContainerLabel>
        <S.ContainerLabel>
          <label htmlFor="fim">Hora de início*</label>
          <S.InputHora type="text" id="fim" placeholder="12:00" />
        </S.ContainerLabel>
        <S.ContainerLabel>
          <label htmlFor="fim">Hora fim* </label>
          <S.InputHora type="text" id="fim" placeholder="13:00" />
        </S.ContainerLabel>
      </S.ContentInputs>
      
    </>
  )
}

export default DadosGerais
