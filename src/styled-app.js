import styled from 'styled-components'
import fundo from './assets/fundo.jpeg'

export const Container = styled.div`
  background: url(${fundo}) no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #ffffe6;

  @media screen and (max-width: 800px) {
    background-size: contain;
  }
`

export const HContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  color: #a6a6a6;

  @media screen and (max-width: 800px) {
    margin-top: 28px;
  }
`
