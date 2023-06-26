import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Contexto from '../../context/Contexto';

function Login() {
  const { logearme } = useContext(Contexto)
  const navegacion = useNavigate();
  const login = () => {
    navegacion('/', { replace: true })
    // const input = document.querySelector('.input')
    const nameUser = 'input.value';
    logearme(nameUser)
  }
  const register = () => {
    navegacion('/register', { replace: true })
  }
  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </>
  )
}

export default Login