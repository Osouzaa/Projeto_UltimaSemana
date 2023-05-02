import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  width: 400px;
  transition: all 0.3s ease-in-out;

  background: #ffffff;
  width: 487px;
  height: 409px;
  border-radius: 8px;
  padding: 0 2em;
  border-radius: 16px;

  &.expanded {
    display: block;
  }
`
const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50%;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #00995d;
  }
  img {
    cursor: pointer;
  }
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const TextP = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #00995d;
  margin-bottom: 30px;
`

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0em;
  gap: 1em;
`

const Buttons = styled.button`
  width: 264px;
  height: 48px;

  background-color: #2f80ed;
  color: #fff;
  border: none;
  border-radius: 24px;
  font-weight: 700;
  cursor: pointer;
`

const Button = styled(Buttons)`
  background: #eb5757;
`
export default {
  Container,
  ContentTitle,
  Content,

  TextP,
  ContainerButton,
  Buttons,
  Button
}
