import FlechaDireita from '@/icons/Arrow/ArrowRight.svg'
import FlechaEsquerda from '@/icons/Arrow/ArrowLeft.svg'
import FlechaEsquerdaColor from '@/icons/Arrow/ArrowLeftColor.svg'
import FlechaCentro from '@/icons/Arrow/ArrowCenter.svg'
import FlechaDireitaPreenchida from '@/icons/Arrow/ArrowRightColor.svg'
import FlechaCentroColor from '@/icons/Arrow/ArrowCenterColor.svg'
import FlechaCentroBG from '@/icons/Arrow/ArrowCenterBG.svg'
import S from './style'

import { useLocation } from 'react-router-dom'

export const ArrowRight = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/AplicacaoTeste' || location.pathname === '/Salvar' ? (
        <S.Image src={FlechaDireitaPreenchida} alt="" />
      ) : (
        <S.Image src={FlechaDireita} alt="" />
      )}
    </>
  )
}

export const ArrowCenter = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname === '/AplicacaoTeste' ? (
        <S.Image src={FlechaCentroColor} alt="" />
      ) : location.pathname === '/Salvar' ? (
        <S.Image src={FlechaCentroBG} alt="" />
      ) : (
        <S.Image src={FlechaCentro} alt="" />
      )}
    </>
  )
}

export const ArrowLeft = () => {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/Salvar' ? <S.Image src={FlechaEsquerda} alt="" /> : <S.Image src={FlechaEsquerdaColor} alt="" />}
    </>
  )
}
