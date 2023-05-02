import styled from 'styled-components'

const ContainerGeral = styled.div`
  max-width: 100%;
  margin: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`

const ContainerInputs = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin: 2px;
  gap: 0.5em;
`


const TitleItens = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`


const ContentPorque = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin: 2px;
  gap: 0.5em;

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #000;
  }

  input {
    width: 438px;
    height: 59px;
    border: 1px solid #868686;
    border-radius: 16px;
    padding: 0.5em;
    outline: none;

    &::placeholder {
      color: #303030;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
    }
  }
`

const InputsLabel = styled.div`
  display: flex;
  gap: 0.5em;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #303030;
  }

  input {

    height: 20px;
    width:20px;
  }
`

export default {
  ContainerInputs,
  ContentPorque,
  ContainerGeral,
  InputsLabel,
  TitleItens,
}
