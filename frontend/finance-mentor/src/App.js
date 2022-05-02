import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Pages
import HomePage from './components/pages/HomePage'
import StocksPage from './components/pages/StocksPage'
import BankPage from './components/pages/BankPage'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './components/pages/About'

function App() {
  return (
    <Router>
      <Navbar active="home" />
      <Routes>
        <Route exact path="/home" element={<HomePage />}></Route>
        <Route exact path="/stocks" element={<StocksPage />}></Route>
        <Route exact path="/bank" element={<BankPage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
