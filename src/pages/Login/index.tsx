import { loginService } from '@/Service/login-service'
import Global from '@/style/global'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import S from './style'
import Logo from '@/icons/Login/LogoWEXER.svg'
import LogoPSI from '@/icons/Login/psi.svg'
import LogoX from '@/icons/Login/logo.svg'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const Navigate = useNavigate()

  const login = async (event: React.MouseEvent) => {
    event.preventDefault()
    try {
      const response = await loginService({ email, password })
      localStorage.setItem('token', response.token)
      Navigate('/App')
    } catch (er) {
      if (er instanceof Error) {
        setError(er.message)
        return
      }
      setError('Deu erro')
    }
  }
  

  return (
    <>
      <Global />
      <S.Container>
        <S.LogoX src={LogoX} alt="" />
        <S.ContentGreen>
          <S.ContentLogo>
            <img src={Logo} alt="Logo Wexer" />
            <img src={LogoPSI} alt="Logo PSI" />
          </S.ContentLogo>
          <form>
            <S.Erro>{error}</S.Erro>
            <S.ContentInputs>
              <label>Login </label>
              <input type="text" placeholder="fulano@wexer.com.br" onChange={ev => setEmail(ev.target.value)} />
            </S.ContentInputs>
            <S.ContentInputs>
              <label>Senha </label>
              <input type="password" placeholder="****************" onChange={ev => setPassword(ev.target.value)} />
            </S.ContentInputs>
            <span>Esqueci a senha</span>
            <S.ContentButton>
              <S.Button type="submit" onClick={login}>
                Entrar
              </S.Button>
            </S.ContentButton>
            <p>Cadastre-se gratuitamente</p>
          </form>
        </S.ContentGreen>
      </S.Container>
    </>
  )
}
