interface NomeProps{
    nome: string;
    changeName: (name: string) => void;
}

export function Nome({ nome, changeName }: NomeProps){
    return (
        <div>
            <strong>Aluno: {nome}</strong>
            <br />
            <button onClick={ () => changeName("Mateus De Paula")}>
                Trocar nome
            </button>
        </div>
    )
}