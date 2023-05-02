import styled from 'styled-components'

interface Props {
  top?: boolean
}

const Container = styled.div`
  width: 84%;
  border-radius: 16px;
  background: #fff;

  position: absolute;
  top: 29%;
  left: 8%;

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
const AplicationTest = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #4f4f4f;

  &.expanded {
    display: none;
  }
`

const Image = styled.img<Props>`
  cursor: pointer;
  padding-left: 1.8em;
  margin-bottom: 2em;
  margin-top: ${props => props.top? '2em' : '0'};
  
`

const ContentNone = styled.div`
  padding-left: 2em;
`

const ApplicationContext = styled.div`
  display: none;
  font-size: 10px;
  margin-bottom: 1em;

  &.expanded {
    display: block;
  }
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

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 350px;


  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 16px 16px;
  padding: 1em;
  z-index: 1;
  top: 12em;
  left: 2em;

  button {
    width: 257px;
    height: 48px;
    background: #00995d;
    border-radius: 24px;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin: 0 30px;
  }
`
const Inputs = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background-color: red !important;
`

const ContentInputs = styled.label`
  display: flex;
  align-items: center;
  gap: 0.8em;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 40px;
`

export default {
  Container,
  ContentP,
  Image,
  ContentNone,
  ApplicationContext,

  ContentTitle,
  DivContent,
  ContentInput,
  InputObs,
  AplicationTest,
  Card,
  ContentDiv,
  Content,
  Inputs,
  ContentInputs
}
