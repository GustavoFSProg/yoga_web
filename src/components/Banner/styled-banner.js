import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffb3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: Lato;
  color: #4d4d4d;
  font-weight: bold;
  font-size: 15px;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 110px;
  }
`

export const Item = styled.span``
