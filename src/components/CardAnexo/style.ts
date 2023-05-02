import styled from 'styled-components'

const ContainerAnexo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0.8em 0;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #424242;
  }
`

const ContainerPDF = styled.div`
  display: flex;
  gap: 0.3em;
  margin-bottom: 10px;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #2f80ed;
  }
`

export default {
  ContainerPDF,
  ContainerAnexo
}
