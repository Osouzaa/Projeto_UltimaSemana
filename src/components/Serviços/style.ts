import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 2em;
`

const ContentIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
  }
`
export default {
  Container,
  ContentIcons
}
