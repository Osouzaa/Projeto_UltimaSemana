import styled from 'styled-components'

const BordarGeral = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 9px;
`
const ContainerAvaliação = styled.div`
  border-bottom: 1px solid #e0e0e0;

  width: 100%;
  padding: 0 0.3em;
`
const ContentAvaliação = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.2em;
`

const Image = styled.img`
  cursor: pointer;
`

const TextSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 115px;
  height: 32px;
  background: #c5f2e0;
  border-radius: 16px;
  margin: 5px 10px;
`

const ContainerButtons = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 2.8em;
  gap: 1em;
  width: 90%;

  button {
    width: 165px;
    height: 48px;
    border-radius: 8px;
    color: #9e9e9e;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    border: none;
    cursor: pointer;
  }
`

const TextP = styled.p`
  color: #4f4f4f;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  position: absolute;
  bottom: 4.7em;
`

export default {
  ContainerButtons,
  TextSpan,
  Image,
  ContainerIcons,
  ContentAvaliação,
  ContainerAvaliação,
  BordarGeral,
  TextP
}
