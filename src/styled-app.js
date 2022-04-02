import styled from 'styled-components'
import fundo from './assets/fundo.jpeg'

export const Container = styled.div`
  background: url(${fundo}) no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
`

export const HContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  color: gray;
`
