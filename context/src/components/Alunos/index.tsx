import { useContext } from 'react'
import { Nome } from '../Nome'
import { userContext } from '../../contexts/user'

export function Alunos(){
    const { qtdAlunos, mudaNome } = useContext(userContext)

    return (
        <div>
            <h3>Quantidade de alunos: {qtdAlunos}</h3>
            <button onClick={ () => mudaNome("Bianca De Paula")}>
                Mudar nome
            </button>

            <br /> <br />
            <Nome />
        </div>
    )
}