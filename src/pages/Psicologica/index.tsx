import HeaderPageTwo from '@/components/HeaderPageTwo'
import S from './style'
import Global from '@/style/global'
import Entrevista from '@/components/Entrevista'
import CondiçãoAvaliação from '@/components/CondiçãoAvaliação'
import HistoricoFamiliar from '@/components/HistoricoFamiliar'
import VidaProfissional from '@/components/VidaProfissional'
import VidaEscolar from '@/components/VidaEscolar'
import Saude from '@/components/Saúde'
import CondutaSocial from '@/components/CondutaSocial'
import AtividadeRemunerada from '@/components/AtividadeRemunerada'
import Buttons from '@/components/Buttons'

const PagePsicologica = () => {
  return (
    <>
      <Global />
      <S.Container>
        <HeaderPageTwo>Entrevista Psicológica</HeaderPageTwo>
        <Entrevista />
        <CondiçãoAvaliação />
        <HistoricoFamiliar />
        <VidaProfissional />
        <VidaEscolar />
        <Saude />
        <CondutaSocial />
        <AtividadeRemunerada />
        <Buttons />
      </S.Container>
    </>
  )
}

export default PagePsicologica
