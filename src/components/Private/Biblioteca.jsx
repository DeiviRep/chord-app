import React from 'react'
import styles from './styles-modules/Biblioteca.module.css'

function Biblioteca() {
  return (
    <>
      <h1>Biblioteca</h1>
      <div className={styles.container}>
        <h1 className={styles.title}>Título del componente</h1>
        <p>Contenido del componente...</p>
      </div>
    </>
  )
}

export default Biblioteca