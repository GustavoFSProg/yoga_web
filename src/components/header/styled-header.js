import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffcc;
  width: 100%;
  height: 50px;
  background-size: contain;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 0.5;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`
