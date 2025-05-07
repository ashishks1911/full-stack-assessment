import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'
import SearchState from './context/SearchContext'

function App() {

  return (
    <SearchState>
      <Header />
      <main className='min-h-screen'>
        <ToastContainer />
        <Outlet />
      </main>
      <Footer />
    </SearchState>
  )
}

export default App
