import styled from 'styled-components'

const DadosGerais = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;
  margin-bottom: 1.5em;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #00995d;
    color: #fff;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
  }
`

const ContentInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`

const ContainerLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }

  input {
    outline: none;
  }
`

const InputDate = styled.input`
  ::-webkit-calendar-picker-indicator {
    display: none;
  }
  width: 182px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  border-radius: 8px;

  color: #828282;
  padding: 0 10px;
`
const InputHora = styled.input`
  width: 182;
  height: 48px;
  background: #ffffff;
  padding: 0 0.5em;

  border: 1px solid #bdbdbd;
  border-radius: 8px;
`

export default {
  DadosGerais,
  InputDate,
  ContainerLabel,
  ContentInputs,
  InputHora
}
