import { ReactNode } from 'react'
import S from './style'

type Props = {
  children: ReactNode
}

const TitleAvaliação = ({ children }: Props) => {
  return (
      <S.TitleContent>{children}</S.TitleContent>
    
  )
}

export default TitleAvaliação
