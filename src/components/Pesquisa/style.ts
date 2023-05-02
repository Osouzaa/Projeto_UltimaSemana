import styled from 'styled-components'

const Container = styled.div`
  width: 87vw;
  height: 69px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 8em;
  top: 6.5em;
  padding: 0 1em;
  z-index: 0;

  @media (min-width: 2560px) {
    width: 90.8vw;
    }

    @media (min-width: 1366px) {
      width: 85.4vw;
    }
    @media (min-width: 1422.22px) {
      width: 84.2vw;
    }
`

const Links = styled.a`
  width: 218px;
  text-align: center;
  text-decoration: none;
  color: #e0e0e0;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  padding: 1em;
  border-bottom: 2px solid #f2f2f2;
  border-right: 2px solid #f2f2f2;
  cursor: pointer;

  &:focus {
    color: #017849;
    border-bottom: 2px solid #017849;
  }
`

const ContainerLinks = styled.div`
  display: flex;
`

const InputSearch = styled.input`
  width: 250px;
  height: 40px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  border-right: none;
  padding-left: 0.5rem;

  &::placeholder {
    padding-left: 0.5em;
    font-weight: 400;
    font-size: 14px;
    color: #9e9e9e;
  }

  &:focus {
    outline: none;
  }
`

const Lupa = styled.img``

const ContainerSearch = styled.div`
  display: flex;
  border: 1px solid #e0e0e0;
  border-radius: 9px;
  padding-right: 0.5em;
`

export default {
  Container,
  Links,
  ContainerLinks,
  InputSearch,
  Lupa,
  ContainerSearch
}
