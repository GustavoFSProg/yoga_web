import { Container, Card, CardContainer, Img } from './styled-classes'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'
import image from '../../assets/foto1.jpeg'
import pilates from '../../assets/pilates.jpg'
import massagem from '../../assets/massagem.jpg'

function Classes() {
  return (
    <Container>
      <Header />
      <CardContainer>
        <Card>
          <Img src={image} alt="imagem" />
          <span style={{ marginTop: '12px' }}>Yoga</span>
        </Card>
        <Card>
          <Img src={pilates} alt="imagem" />
          <span style={{ marginTop: '12px' }}>Pilates</span>
        </Card>
        <Card>
          <Img src={massagem} alt="imagem" />
          <span style={{ marginTop: '12px' }}>Massoterapia</span>
        </Card>
      </CardContainer>
      <Footer />
    </Container>
  )
}

export default Classes
