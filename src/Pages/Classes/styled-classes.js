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
    margin-top: 472px;
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
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
    height: 80rem;
    padding-bottom: 25px;
  }
`
export const Img = styled.img`
  width: 220px;
  height: 120px;
  margin-top: -10px;
  text-align: center;

  @media screen and (max-width: 800px) {
    margin-top: 20px;
    width: 200px;
    height: 100px;
  }
`
export const Text = styled.p`
  font-family: Roboto;
  font-size: 16px;
  width: 13.2rem;
  text-indent: 15px;
  line-height: 1.5rem;
  color: #8c8c8c;
  margin-left: 10px;
`
