import styled from 'styled-components'

const Container = styled.div`
  width: 320px;
  height: 236px;
  background: #ffffff;

  border: 1px solid #e0e0e0;

  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 1em;
`

const TitleIcons = styled.div`
  padding: 0 0.9em;
  padding-top: 1em;
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #212121;
  }
  img {
    cursor: pointer;

    &:hover {
      fill: #000;
    }
  }
`

const ContentP = styled.div`
  padding: 0.5em 0.9em;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 170%;
    margin-bottom: 0.8em;

    color: #424242;
  }
`

export default {
  Container,
  TitleIcons,
  ContentP
}
