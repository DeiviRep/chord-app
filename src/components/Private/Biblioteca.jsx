import React from 'react'
import styles from './styles-modules/Biblioteca.module.css'
import CharacterList from '../character/CharacterList'
import 'bootstrap/dist/css/bootstrap.min.css'

function Biblioteca() {
  return (
    <>
      <h1>Biblioteca</h1>
      <div className={styles.container}>
        <h1 className={styles.title}>Título del componente</h1>
        <p>Contenido del componente...</p>
      </div>
      <div className='bg-dark text-white container p-2'>
        <CharacterList />
      </div>
    </>
  )
}

export default Biblioteca