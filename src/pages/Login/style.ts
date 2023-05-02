import styled from 'styled-components'

const Container = styled.div`
  background: #e5e5e5;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentGreen = styled.div`
  width: 608px;
  height: 608px;
  background: #017849;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  form {
    margin-top: 60px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #ffffff;
    float: right;
    margin-right: 121px;
  }

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #ffffff;
    margin-top: 24px;
  }
`

const ContentLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.9em;

  margin-top: 77px;
`

const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    display: flex;
    justify-content: flex-start;
    align-items: start;
    width: 380px;
    margin-bottom: 0.2em;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }

  input {
    background: #ffffff;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    width: 379.04px;
    height: 47.92px;
    margin-bottom: 17px;
    padding-left: 1em;

    &::placeholder {
      padding-left: 1em;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #828282;
    }
  }
`
const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`
const Button = styled.button`
  width: 379px;
  height: 48px;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  background: #017849;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  border: 1px solid #ffffff;
  border-radius: 24px;
  cursor: pointer;
`

const LogoX = styled.img`
  position: absolute;
  left: 0;

  @media (max-width: 1366px) {
    max-width: 350px;
  }
`
const Erro = styled.div`
  position: relative;
  margin-left: 120px;
  z-index: 0;
`
export default {
  Container,
  ContentGreen,
  ContentLogo,
  ContentInputs,
  Button,
  ContentButton,
  LogoX,
  Erro
}
