import { Container } from './styled-classes'
import Header from '../../components/header/header'
import Footer from '../../components/Footer/Footer'

function Classes() {
  return (
    <Container>
      <Header />
      <div
        style={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        classes
      </div>
      <Footer />
    </Container>
  )
}

export default Classes
