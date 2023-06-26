import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navegacion = useNavigate()
  const login = () => {
    navegacion('/biblioteca', {replace:true})
  }
  return (
    <>
      <h1>Register</h1>
      <button onClick={login}>Aceptar</button>
    </>

  )
}

export default Register