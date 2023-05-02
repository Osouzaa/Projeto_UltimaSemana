import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 200%;
  transform: translate(-50%, -50%);
  z-index: 1;

  background: #ffffff;
  width: 650px;
  height: 473px;
  border-radius: 8px;
  padding: 0 2em;

  &.expanded {
    display: block;
    transition: opacity 2s ease;
  }
`

const ContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 80px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #00995d;
  }
  img {
    cursor: pointer;
  }
`
const ContainerFooter = styled.div`
  margin-top: 0.5em;
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
  width: 100%;

  display: flex;
  justify-content: flex-end;
  gap: 1em;
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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

export default {
  Container,
  ContentTitle,
  ContainerFooter,
  ContainerButtons,
  Modal
}
