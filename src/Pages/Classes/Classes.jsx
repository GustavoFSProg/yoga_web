import { Container, Card, CardContainer } from './styled-classes'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'

function Classes() {
  return (
    <Container>
      <Header />
      <CardContainer>
        <Card>Yoga</Card>
        <Card>Pilates</Card>
        <Card>Massagem</Card>
      </CardContainer>
      <Footer />
    </Container>
  )
}

export default Classes
