import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffcc;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 375px;
  font-family: Lato;
  color: #4d4d4d;
  font-weight: bold;
  font-size: 15px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 505px;
    height: 110px;
  }
`

export const Item = styled.span``
