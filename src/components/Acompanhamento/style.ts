import styled from 'styled-components'

const Container = styled.div`
  width: 61%;
  height: 176px;

  border-radius: 8px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  background: #ffffff;

  position: relative;
  top: 7.6em;
  left: 29.5em;

  hr {
    margin: 0 2em;
    border: 0.1px solid #e0e0e0;
  }
  @media (min-width: 1920px) {
    width: 67%;
  }

  @media (min-width: 2560px) {
    width: 71.5%;
  }


`

const Options = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  padding: 0.5em;

  @media (min-width: 2560px) {
    justify-content: space-between;
    padding: 2em;
  }

  p {
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: #212121;
  }

  label {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #212121;
    display: flex;
    align-items: center;
    gap: 0.5em;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid #e0e0e0;
      width: 400px;
      height: 48px;
      border-radius: 8px;
      padding-left: 1em;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #616161;
    }
  }
`

const IconsDelete = styled.div`
  display: flex;
  gap: 0.3em;
  align-items: center;
  cursor: pointer;
`

const SelectContainer = styled.div`
  position: relative;
  width: 200px;
`

const SelectLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  pointer-events: none;
  transition: all 0.2s ease-in-out;
`

const Select = styled.select`
  appearance: none;
  width: 100%;
  height: 36px;
  padding: 8px 32px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #1a73e8;
  }

  &:hover {
    cursor: pointer;
    border-color: #1a73e8;
  }

  &::-ms-expand {
    display: none;
  }
`
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`

const OptionLabel = styled.label`
  margin-left: 8px;
  color: #333;
  font-size: 14px;
`

const OptionInput = styled.input`
  margin: 0;
  margin-right: 8px;
`

export default {
  Container,
  Options,
  IconsDelete,
  SelectContainer,
  SelectLabel,
  Select,
  OptionContainer,
  OptionLabel,
  OptionInput
}
