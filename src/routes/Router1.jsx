import Login from '../components/Private/Login'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Register from '../components/Private/Register'
import RutasPublicas from './RutasPublicas'
import RutasPrivadas from './RutasPrivadas'
import Router2 from './Router2'

function Router1() {
    return (
        <>
            <Routes>
                <Route path='login' element={
                    <RutasPublicas>
                        <Login />
                    </RutasPublicas>
                } />
                <Route path='register' element={
                    <RutasPublicas>
                        <Register />
                    </RutasPublicas>
                } />
                <Route path='/*' element={
                    <RutasPrivadas>
                        <Router2 />
                    </RutasPrivadas>
                } />
            </Routes>
        </>
    )
}

export default Router1