import styled from 'styled-components'

const ContainerFooter = styled.div`
  margin-top: .5em;
  position: fixed;
  left: 0%;
  border-top: 2px solid #e0e0e0;
  width: 100%;
  height: 18%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #4f4f4f;
  }
`


const ContainerButtons = styled.div`
  width: 45%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  button {
    width: 147px;
    height: 48px;
    color: #fff;
    background: #00995d;
    border-radius: 24px;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  span {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #616161;
  }
`

export default { 
    ContainerFooter,
    ContainerButtons
}