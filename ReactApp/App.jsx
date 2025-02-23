import React from 'react'
import Head from './components/Head'
import ItemsLine from './components/ItemsLine'
import './App.css'


function App() {
  return (
    <div>
      <Head/>
      <h1 className='brand'>Best Platform to Buy Branded Shoes</h1>
      <ItemsLine/>
      <ItemsLine/>
      <footer>&copy; 2025 LN&co. All rights reserved.</footer>
    </div>
  )
}

export default App