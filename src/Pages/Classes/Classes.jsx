import { Container, Card, CardContainer, Text, Img } from './styled-classes'
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
          <span style={{ marginTop: '17px', fontSize: '18px', color: '#595959' }}>Yoga</span>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
          </Text>
        </Card>
        <Card>
          <Img src={pilates} alt="imagem" />
          <span style={{ marginTop: '17px', fontSize: '18px', color: '#595959' }}>Pilates</span>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
          </Text>
        </Card>
        <Card>
          <Img src={massagem} alt="imagem" />
          <span style={{ marginTop: '17px', fontSize: '18px', color: '#595959' }}>
            Massoterapia
          </span>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
          </Text>
        </Card>
      </CardContainer>
      <Footer />
    </Container>
  )
}

export default Classes
