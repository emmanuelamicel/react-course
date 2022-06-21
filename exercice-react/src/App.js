import React from 'react'
import UserCard from './UserCard'
// import user from './data/user'
import users from './data/users'

const App = () => {
  console.log(users)
  return (
    <>
      <h1>Exercices React</h1>
      <ul>
        {users.map(user => <UserCard key={user.id} {...user} />)}
      </ul>
    </>
  )
}

export default App
