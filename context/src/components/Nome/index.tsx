import { useContext} from 'react'
import { userContext } from '../../contexts/user'

export function Nome(){
    const { aluno } = useContext(userContext)

    return (
        <div>
            <strong>Aluno: {aluno}</strong>
            <br />
        </div>
    )
}