import api from '../../services/api'
import { useState } from 'react'
import { useEffect } from 'react'

function Register() {
  const [users, setUsers] = useState([])

  async function handleUsers() {
    const { data } = await api.get('/')

    setUsers(data)

    console.log(data)
  }

  useEffect(() => {
    handleUsers()
  }, [])

  return (
    <div>
      {users.map((item) => {
        return (
          <ul key={item.id}>
            <li>Nome: {item.name}</li>
            <li>Email: {item.email}</li>
            <li>Foto: {item.avatar}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Register
