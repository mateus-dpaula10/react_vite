import { useState } from 'react'

interface UserProps {
    nome: string;
    cargo: string;
}

export default function App(){
    const [user, setUser] = useState<UserProps>({
        nome: "visitante",
        cargo: ""
    })

    function handleLogin(){
        setUser({
            nome: "Mateus",
            cargo: "Dev Frontend"
        })
    }

    function handleLogout(){
        setUser({
            nome: "visitante",
            cargo: ""
        })
    }

    return (
        <div>
            <h1>Conhecendo useState</h1>
            <button onClick={handleLogin}>
                Entrar
            </button>
            <button onClick={handleLogout}>
                Fazer logout
            </button>

            <h4>Olá {user.nome}</h4>
            <strong>{user.cargo}</strong>
        </div>
    )
}
