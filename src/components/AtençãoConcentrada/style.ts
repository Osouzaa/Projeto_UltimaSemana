import styled from 'styled-components'

const Container = styled.div`
  width: 84%;
  height: 280px;
  border-radius: 16px;
  background: red;

  position: absolute;
  top: 29%;
  left: 10%;

  &.expanded {
    height: 1870px;
  }
`

const ContentP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 1em 2em;
`
const AplicationTest = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;

  &.expanded {
    display: none;
  }
`

const Image = styled.img`
  cursor: pointer;
  padding-left: 1.8em;
  margin-bottom: 2em;
`

const ContentNone = styled.div`
  padding-left: 2em;
`

const ContentDiv = styled.div`
  &.expanded {
    display: block;
  }
`

const ContentTitle = styled.div`
  width: 100%;
  height: 58px;

  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #000;
  }
`

const DivContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2em;
`

const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  label {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }

  input {
    width: 161px;
    height: 50px;

    background: #e0e0e0;
    border: 1px solid #bdbdbd;
    border-radius: 8px;
    outline: none;
    margin-bottom: 1em;
    padding-left: 1em;
  }
`

const Card = styled.div`
  background: #f2f2f2;
  border-radius: 16px;
  height: 304px;
  width: 816px;
  margin-left: 2em;
  margin-bottom: 2em;
`

const InputObs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 4em;

  label {
    margin-bottom: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }

  input {
    background: #e0e0e0;
    border: 1px solid #bdbdbd;
    border-radius: 16px;

    width: 731px;
    height: 59px;
    outline: none;
    padding-left: 1em;

    &::placeholder {
      color: #303030;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      padding-left: 1em;
    }
  }
`

export default {
  Container,
  ContentP,
  Image,
  ContentNone,

  ContentTitle,
  DivContent,
  ContentInput,
  InputObs,
  AplicationTest,
  Card,
  ContentDiv
}
