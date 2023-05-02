import styled from 'styled-components'

const Container = styled.div`
  display: none;

  &.expanded {
    display: block;
  }
`

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  width: 350px;
  height: 363px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 16px 16px;
  padding: 1em;
  z-index: 1;
  top: 24em;
  left: 8.5em;

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

export default {
  Container,
 
  Inputs,
  Content
}
