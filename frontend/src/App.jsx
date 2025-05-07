import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
