import styled from 'styled-components'

const ButtonBase = styled.button`
  width: 182px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: #00995d;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  padding: 0 2em;
  
`

const Button = styled(ButtonBase)`
  background: transparent;
  color: #00995d;
  border: 1px solid #00995d;
  box-shadow: none;

  a {
    text-decoration: none;
    color: #00995d;
  }
`
const ContainerButtons = styled.div`
  display: flex;
  gap: 2em;
  margin-left: 2em;
`

export default {
  ButtonBase,
  Button,
  ContainerButtons
}
