import { Container, HContainer } from './styled-app'
import Header from './components/header/header'
import Footer from './components/Footer/Footer'
import Carrousel from './components/Carousel'
// import Banner from './components/Banner'

function App() {
  return (
    <Container>
      <Header />
      <Carrousel />
      <HContainer>
        <h1>Espaço - Vidya</h1>
      </HContainer>
      <Footer />
    </Container>
  )
}

export default App
