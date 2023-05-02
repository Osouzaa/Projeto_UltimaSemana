import styled from 'styled-components'

const ContentTitle = styled.div`
  width: 100%;
  height: 75px;
  background: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  border: 1px solid #f2f2f2;
  margin-bottom: 1em;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #017849;
    margin-left: 1em;
  }

  div {
    display: flex;
    gap: 1em;
    margin-right: 1.5em;
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
`
const ListraVerde = styled.div`
  position: absolute;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 6px;
  height: 65px;
  background: #00995d;
`
export default {
  ContentTitle,
  ButtonBase,
  Button,
  ListraVerde
}
