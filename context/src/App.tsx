import { useState } from 'react'
import { Alunos } from './components/Alunos'
import { Footer } from './components/Footer'

import UserPovider from './contexts/user'

function App(){
  return (
    <UserPovider>
      <div>
        <h1>Escola DEV</h1>
        <br />
        <hr />

        <Alunos />

        <Footer />

      </div>
    </UserPovider>
  )
}

export default App
