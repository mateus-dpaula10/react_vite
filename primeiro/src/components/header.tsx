import './header.css'

interface HeaderProps {
    title:
}

export default function Header({}: HeaderProps) {
    return (
        <header className="header">
            <h1 className="title">Alunos do React</h1>

            <hr />
        </header>
    )
}