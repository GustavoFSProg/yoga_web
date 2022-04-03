import { Container, HContainer } from './styled-app'
import Header from './components/header/header'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Container>
      <Header />
      <HContainer>
        <h2>Padma - Yoga</h2>
      </HContainer>
      <Footer />
    </Container>
  )
}

export default App
