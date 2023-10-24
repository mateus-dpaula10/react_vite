import { ReactNode, createContext, useState} from 'react'

interface UserProviderProps{
    children: ReactNode;
}

type userContextData = {
    aluno: string;
    qtdAlunos: number;
    mudaNome: (nome: string) => void;
    novoAluno: () => void;
}

export const userContext = createContext({} as userContextData);

function userProvider({ children }: UserProviderProps){
    const [aluno, setAluno] = useState("Mateus De Paula")
    const [qtdAlunos, setQtdAlunos] = useState(40)

    function mudaNome(nome: string){
        setAluno(nome)
    }

    function novoAluno(){
        setQtdAlunos(alunos => alunos+1)
    }

    return (
        <userContext.Provider value={{ aluno, qtdAlunos, mudaNome, novoAluno }}>
            {children}
        </userContext.Provider>
    )
}

export default userProvider
