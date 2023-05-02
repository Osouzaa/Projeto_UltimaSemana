import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.6em;
`

const Risco = styled.span`
  width: 100%;
  border: 1px solid #bdbdbd;
  flex: 1;
`

const LabelSelect = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #757575;
  gap: .2em;
`

const Filtrar = styled.p`
  flex: 1;
  text-align: right;
`

export default {
  Container,
  LabelSelect,
  Risco,
  Filtrar
}
