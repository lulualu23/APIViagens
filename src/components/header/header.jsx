import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <h1 className='titulo'> Lugares imperdíveis para se viajar!</h1>
                <nav>
                    <ul>
                        <Link to="/">Home</Link>
                        <Link to="/viagens">Viagens</Link>
                        <Link to="/sobre">Sobre</Link>
                    </ul>
                </nav>
            </header>

        </>
    )
}