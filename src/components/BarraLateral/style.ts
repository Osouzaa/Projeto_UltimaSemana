import styled from 'styled-components'

const ContainerLateral = styled.div`
  background: #00995d;
  height: 100vh;
  width: 75px;
  transition: width 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  z-index: 9998;

  &.expanded {
    width: 200px;
  }
`

const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

const Content = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 2em;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;

    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
  }
`
const ContentImagens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const ListItens = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`
const Listas = styled.ul`
  display: flex;
  flex-direction: column;
`

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.active {
    background: #017849;
  }
`

const ULSList = styled.ul`
  display: flex;
  flex-direction: column;

  text-align: start;

  li {
    list-style: none;
    padding: 1em;
  }
`
export default {
  ULSList,
  ContainerLateral,
  Image,
  Content,
  ContentImagens,
  ListItens,
  Listas,
  ContainerList
}
