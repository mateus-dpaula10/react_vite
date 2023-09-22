import { Outlet } from 'react-router-dom'
import { Header } from '../header'

export function Layout(){
    return (
        <>
            <Header />
            <Outlet />
            <footer>
                <span>Todos os direitos reservados &copy; 2023</span>
            </footer>
        </>
    )
}