import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffe6;
`
export const CardContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }
`
export const Card = styled.div`
  background: white;
  width: 270px;
  height: 400px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    height: 70rem;
  }
`
