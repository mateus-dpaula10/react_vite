import { Link } from 'react-router-dom'

export function Home(){
    return (
        <div>
            <h1>Bem vindo a Home</h1>
            <span>Primeira página</span>
            <br />

            <Link to="/sobre">Sobre</Link> <br />
            <Link to="/contato">Contato</Link>
        </div>
    )
}