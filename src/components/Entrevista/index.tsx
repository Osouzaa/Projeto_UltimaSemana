import Duvida from '@/icons/duvida.svg'
import S from './style'

const Entrevista = () => {
  return (
    <S.Container>
      <S.ContentTitle>
        <label htmlFor="entrevista">Síntese da entrevista</label>
        <img src={Duvida} alt="" />
      </S.ContentTitle>
      <S.InputContainer
        id="entrevista"
        placeholder="Nos dados registrados e observados durante a entrevista o(a) avaliado(a) declarou estar..."
      />
    </S.Container>
  )
}

export default Entrevista
