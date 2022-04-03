import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #ffffe6;

  @media screen and (max-width: 800px) {
    background-size: contain;
  }
`
