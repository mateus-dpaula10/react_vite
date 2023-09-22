import { Link } from 'react-router-dom'

export function Contato(){
    return (
        <div>
            <h1>Bem vindo a Contato</h1>
            <h3>Telefone: (XX) XXXX-XXXX</h3>

            <hr />

            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/">Ir para Home</Link>
        </div>
    )
}