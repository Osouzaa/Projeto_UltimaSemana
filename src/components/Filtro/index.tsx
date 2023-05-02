import Sections from '../CardSessão'
import SelectFiltro from '../SelectModal'
import S from './styled'

const Filtro = () => {
  return (
    <>
      <S.Container>
        <S.Risco></S.Risco>
        <S.LabelSelect>
          <S.Filtrar>Filtrar por:</S.Filtrar>
          <SelectFiltro />
        </S.LabelSelect>
      </S.Container>
      <Sections />
    </>
  )
}

export default Filtro
