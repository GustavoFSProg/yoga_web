import { Link } from 'react-router-dom'
import SimpleMenu from '../Menu/menu'
import { Container, Item } from './styled-header'

function Header() {
  return (
    <Container>
      <SimpleMenu />
      <Item>
        <Link style={{ textDecoration: 'none' }} to="/">
          Home
        </Link>
      </Item>
      <Item>
        <Link style={{ textDecoration: 'none' }} to="/classes">
          Aulas
        </Link>
      </Item>
      <Item>
        <Link style={{ textDecoration: 'none' }} to="/register">
          Lista
        </Link>
      </Item>
      <Item>Sobre</Item>
      <Item>Cadastro</Item>
    </Container>
  )
}

export default Header
