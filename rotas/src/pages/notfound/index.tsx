import { Link } from 'react-router-dom'

export function NotFound()
{
    return (
        <div>
            <h1>Essa página não existe!</h1>
            
            <Link to="/">Acessar home</Link>
        </div>
    )
}