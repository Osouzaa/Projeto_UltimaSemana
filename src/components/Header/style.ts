import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`

const ContainerHeader = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #ffffff;
  padding-left: 2em;
  padding-right: 4em;

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  p {
    color: #017849;
    font-weight: 300;
    font-size: 24px;
  }
  span {
    font-weight: 700;
    margin-right: 10px;
  }
  img {
    cursor: pointer;
  }
`

const ImagemContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80.75px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`

export default {
  Header,
  ContainerHeader,
  ImagemContent
}
