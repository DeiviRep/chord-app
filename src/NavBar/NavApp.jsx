import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../context/Contexto';

function NavApp() {
    const navegacion = useNavigate();
    const { deslogearme } = useContext(Contexto)
    const login = () => {
        navegacion('/login', { replace: true })
        deslogearme();
    }
    return (
        <>
            <header>
                <nav>
                    <NavLink to='biblioteca'>
                        Biblioteca
                    </NavLink>
                    <NavLink to='favoritos'>
                        Faboritos
                    </NavLink>
                    <NavLink to='inicio'>
                        Inicio
                    </NavLink>
                    <button onClick={login}>Logout</button>
                </nav>
            </header>
        </>
    )
}

export default NavApp