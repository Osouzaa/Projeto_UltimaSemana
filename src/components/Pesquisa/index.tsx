import S from './style'
import Lupa from '@/icons/Lupa.svg'
const Search = () => {
  return (
    <S.Container>
      <S.ContainerLinks>
        <S.Links href="#">Dados Cadastrais</S.Links>
        <S.Links href="#">Prontuário</S.Links>
      </S.ContainerLinks>

      <S.ContainerSearch>
        <S.InputSearch type="text" placeholder="O que você está procurando?" />
        <S.Lupa src={Lupa} alt="" />
      </S.ContainerSearch>
    </S.Container>
  )
}

export default Search
