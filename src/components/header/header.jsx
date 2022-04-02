import SimpleMenu from '../Menu/menu'
import { Container, Item } from './styled-header'

function Header() {
  return (
    <Container>
      <SimpleMenu />
      <Item>Home</Item>
      <Item>Aulas</Item>
      <Item>Contato</Item>
      <Item>Sobre</Item>
      <Item>Cadastro</Item>
    </Container>
  )
}

export default Header
