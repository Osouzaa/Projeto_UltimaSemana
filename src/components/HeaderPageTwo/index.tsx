import S from './style'
import Buttons from '../Buttons'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  handleClick?: () => void 
}

const HeaderPageTwo = ({children, handleClick}:Props) => {
  return (
    <>
      <S.ContentTitle>
        <S.ListraVerde></S.ListraVerde>
        <h2>{children}</h2>
        <Buttons handleClick={handleClick} />
      </S.ContentTitle>
    </>
  )
}

export default HeaderPageTwo
