import styled from 'styled-components'

const Container = styled.div`
  width: 90%;
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em .5em;

  label {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }
`

const InputContainer = styled.textarea`
  margin-left: 2em;
  width: 98.5%;
  height: 149px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  outline: none;
  resize:none;
  padding: 1em;

  &::placeholder {
    color: #c2c2c2;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    max-width: 35%;
    padding: 1em;
  }
`

export default {
  Container,
  ContentTitle,
  InputContainer
}
