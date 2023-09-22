import { FormEvent, useState } from 'react'
import './App.css'

interface ResultadoProps{
  nome: string;
  idade: number;
}

function App()
{
  const [nome, setNome] = useState("")
  const [ano, setAno] = useState("")
  const [resultado, setResultado] = useState<ResultadoProps>()

  function descobrirIdade(e: FormEvent)
  {
    e.preventDefault()

    // pego o ano atual
    const currentYear = new Date().getUTCFullYear()
    setResultado({
      nome: nome,
      idade: currentYear - Number(ano)
    })    

    setNome("")
    setAno("")
  }

  return (
    <div className='container'>
      <h1>Digite seu nome:</h1>

      <form className='form'>
        <label className='label'>Seu nome</label>
        <input 
          className="input" 
          placeholder="Digite seu nome"
          value={nome}
          onChange={ (e) => setNome(e.target.value) }
        />

        <label className='label'>Ano nascimento</label>
        <input 
          className="input" 
          placeholder="Digite o ano do seu nascimento"
          value={ano}
          onChange={ (e) => setAno(e.target.value) }
        />

        <button type='submit' onClick={descobrirIdade}>
          Descobrir idade
        </button>
      </form>

      {resultado && resultado.nome !== '' && (
        <section className="result">
          <h2>{resultado?.nome}, você tem: <span>{resultado?.idade} anos</span></h2>
        </section>
      )}
    </div>
  )
}

export default App
