import "./header.css";

interface HeaderProps {
    // o interrogacao indica que e opcional
    title?: string;
}

// o apos o igual indica que se nao tiver nada, vai preencher com isso
export function Header({ title = "Curso React + Typescript" }: HeaderProps) {
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
        </header>
    )
}
