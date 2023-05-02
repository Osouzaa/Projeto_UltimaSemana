import styled from 'styled-components'

const Container = styled.div`
  width: 400px;
  height: 124px;
  background: #fff;
  border-radius: 4px 4px 16px 16px;
  position: absolute;
  top: 41%;
  left: 11.3%;
  @media (max-width: 1920px) {
    top: 43%;
    left: 13.4%;
  }
`
const ContentInputs = styled.label`
  width: 326px;
  height: 62px;
  background: #ffffff;
  border-radius: 16px;

  label {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  input {
    height: 24px;
    width: 24px;
    border: 3px solid #00995d;
    border-radius: 100px;
    margin-left: 1em;
  }
  &.disable {
    color: #bdbdbd;
  }
`
const ContentRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;

  div {
    height: 24px;
    width: 24px;
    border: 3px solid #00995d;
    border-radius: 100px;
    margin-left: 1em;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }

  &.disable {
    div {
      height: 24px;
      width: 24px;
      border: 3px solid #e0e0e0;
      border-radius: 100px;
      margin-left: 1em;
    }

    span {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #bdbdbd;
    }
    :hover {
      div {
        height: 24px;
        width: 24px;
        border: 3px solid #00995d;
        border-radius: 100px;
        margin-left: 1em;
      }

      span {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #000000;
      }
    }
  }
`

const Marcar = styled.span`
  height: 8px;
  width: 8px;
  background: #00995d;
  border-radius: 100px;
`
export default {
  Container,
  ContentInputs,
  ContentRadio,
  Marcar
}
