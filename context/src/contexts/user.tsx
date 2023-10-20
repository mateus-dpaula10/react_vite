import { createContext} from 'react'

type userContextData = {
    aluno: string;
    qtdAlunos: number;
}

export const userContext = createContext({} as userContextData);

function userProvider(){
    return(
        <userContext.Provider>
            {children}
        </userContext.Provider>
    )
}