import { useState } from 'react'
import { Alunos } from './components/Alunos'

function App(){
  const [nome, setNome] = useState("Sujeito programador")

  return (
    <div>
      <h1>Escola DEV</h1>
      <br />
      <hr />

      <Alunos alunoNome={nome} changeName={ (name: string) => setNome(name) } />
    </div>
  )
}

export default App
