import Logo from '@/icons/logo.svg'
import Hamburguer from '@/icons/menu.svg'
import Seta from '@/icons/Seta.svg'

import S from './style'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GetLogin } from '@/Service/user'


type Props = {
  handleClick: () => void
}

const Header = ({ handleClick }: Props) => {
  const Navigate = useNavigate()
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
    GetLogin().then((response) => {
      setUserName(response.name)
    })
  }, [])

  return (
    <div>
      <S.Header>
        <S.ImagemContent onClick={() => Navigate('/')}>
          <img src={Logo} alt="" />
        </S.ImagemContent>
        <S.ContainerHeader>
          <img src={Hamburguer} alt="" onClick={handleClick} />

          <p>
            Bem vindo(a), <span> {userName}</span>
            <img src={Seta} alt="" />
          </p>
        </S.ContainerHeader>
      </S.Header>
    </div>
  )
}

export default Header
