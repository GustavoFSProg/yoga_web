import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffcc;
  width: 100%;
  height: 50px;
  background-size: contain;
  opacity: 0.4;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Item = styled.span`
  @media screen and (max-width: 800px) {
    display: none;
  }
`
