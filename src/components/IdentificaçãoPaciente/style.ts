import styled from 'styled-components'

const ContainerPacient = styled.div`
  position: absolute;
  top: 11.9em;
  left: 8em;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #e0e0e0;

  width: 320px;
  height: 320px;
  display: flex;
  flex-direction:column;
  gap: 1em;
`

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 2em;
  padding-top: 0.8em;
  gap: 0.6em;

  p {
    color: #00995d;
    font-weight: 400;
    font-size: 16px;
  }
`
const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  color: #212121;

  padding: 0.5em 1.5em;
`

const GlobalIcons = styled.div`
  padding-left: 3.5em;
  p {
    padding: 0.5em 0;
    color: #616161;
    font-weight: 400;
    font-size: 16px;
  }
`

export default {
  ContainerPacient,
  Content,
  Title,
  GlobalIcons
}
