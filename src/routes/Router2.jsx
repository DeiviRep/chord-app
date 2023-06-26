import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Error404 from '../components/Public/Error404'
import NavApp from '../NavBar/NavApp'
import Biblioteca from '../components/Public/Biblioteca'
import Favoritos from '../components/Public/Favoritos'
import Inicio from '../components/Public/Inicio'

function Router2() {
    return (
        <>
            <NavApp />
            <Routes>
                <Route path='biblioteca' element={
                    <Biblioteca/>
                } />
                <Route path='favoritos' element={
                    <Favoritos/>
                } />
                <Route path='inicio' element={
                    <Inicio/>
                } />
                <Route path='/' element={
                    <Navigate to='biblioteca'/>
                } />
                <Route path='/*' element={
                    <Error404 />
                } />
            </Routes>
        </>
    )
}

export default Router2