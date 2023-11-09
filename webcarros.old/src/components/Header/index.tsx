import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'

export function Header() { 
    // const signed = false
    // const loadImgAuth = false

    return (
        <div className="w-full flex items-center justify-center h-16 bg-white drop-shadow mb-4">
            <header className="flex w-full max-w-7xl items-center justify-between">
                <Link to="/">
                    <img 
                        src={logoImg} 
                        alt="Logo do site" 
                    />
                </Link>

                <Link to="/dashboard">                
                    <FiUser size={24} color="#000" />                    
                </Link>
            </header>
        </div>
    )
}