import styled from 'styled-components'

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
  padding: 2.8em;
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
  height: 547px;
  width: 816px;
  margin-left: 2em;
  margin-bottom: 2em;
`

const ContentPai = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 3em;
  padding-left: 3.8em;
`
const ContentInputsPai = styled.div`
  input {
    margin-bottom: 2em;
    width: 292px;
    height: 50px;
  }
`
export default {
  Image,
  ContentTitle,
  DivContent,
  ContentInput,
  Card,
  ContentPai,
  ContentInputsPai
}
