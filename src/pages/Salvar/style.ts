import styled from 'styled-components'

const Container = styled.div`
  width: 1131px;
  height: 594px;

  background: #ffffff;
  border-radius: 16px;

  position: absolute;
  top: 28%;
  left: 8%;
`
const ContentDiv = styled.div`
  width: 747px;
  height: 381px;
  padding: 1em;
  margin: 0 30px;

  background: #ffffff;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 3em;

  h3 {
    margin-bottom: 0.5em;
  }
`
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
export default {
  Container,
  ContentDiv,
  ButtonBase,
  Button
}
