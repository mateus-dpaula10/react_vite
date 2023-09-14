import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [textofrase, setTextofrase] = useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda',
        'O bom-senso vale mais do que muito conhecimento',
        'O riso é a menor distância entre duas pessoas',
        'Deixe de lado as preocupações e seja feliz'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Bom dia! Siga os bons e aprenda',
        'Bom dia! O bom-senso vale mais do que muito conhecimento',
        'Bom dia! O riso é a menor distância entre duas pessoas',
        'Bom dia! Deixe de lado as preocupações e seja feliz'
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite! Siga os bons e aprenda',
        'Boa noite! O bom-senso vale mais do que muito conhecimento',
        'Boa noite! O riso é a menor distância entre duas pessoas',
        'Boa noite! Deixe de lado as preocupações e seja feliz'
      ]
    }
  ]

  function handleSwitchCategory(index: number)
  {
    setCategoriaSelecionada(index)
  }

  function gerarFrase()
  {
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextofrase(`" ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} "`)
  }

  return (
    <div className='container'>
      <img 
        className='logo'
        src={logoImg} 
        alt="Logo frases" 
      />

      <h2 className="title">Categorias</h2>
      <section className='category-area'>
        {allFrases.map( (item, index) => (
          <button 
            key={item.id}
            className='category-button'
            style={{ 
              borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fe4db"
            }}

            onClick={ () => handleSwitchCategory(index) }
          >
            {item.nome}
          </button>
        ) )}
      </section>

      <button className="button-frase" onClick={gerarFrase}>Gerar frase</button>
      
      {textofrase !== '' && <p className='texto-frase'>{textofrase}</p>}
    </div>
  )
}

export default App
