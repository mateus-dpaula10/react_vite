import { useContext } from 'react'
import { userContext } from '../../contexts/user'

export function Footer(){
    const { qtdAlunos, novoAluno } = useContext(userContext)

    return (
        <footer>
            <hr />
            <h3>Footer</h3>
            <h4>Alunos online: {qtdAlunos}</h4>
            <button onClick={ () => novoAluno() }>
                Novo aluno
            </button>
        </footer>
    )
}