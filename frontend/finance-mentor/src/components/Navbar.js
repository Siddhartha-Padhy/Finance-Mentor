import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ active }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span className="navbar-brand text-success" style={{ marginLeft: '5%' }}>
        <img src="../favicon.ico" alt="logo" style={{ height: '30px' }} />
        &nbsp; Mentor
      </span>
      <div className="navbar-nav">
        <Link
          className={
            active === 'home' ? 'nav-item nav-link active' : 'nav-item nav-link'
          }
          style={{ paddingRight: '1vw' }}
          to="/home"
        >
          Home
        </Link>
        <Link
          className={
            active === 'stock'
              ? 'nav-item nav-link active'
              : 'nav-item nav-link'
          }
          style={{ paddingRight: '1vw' }}
          to="/stocks"
        >
          Stocks
        </Link>
        <Link
          className={
            active === 'bank' ? 'nav-item nav-link active' : 'nav-item nav-link'
          }
          style={{ paddingRight: '1vw' }}
          to="/bank"
        >
          Bank
        </Link>
        <Link
          className={
            active === 'about'
              ? 'nav-item nav-link active'
              : 'nav-item nav-link'
          }
          style={{ paddingRight: '1vw' }}
          to="/about"
        >
          About
        </Link>
      </div>
      <span className="text-white amount btn btn-success">$25000</span>
    </nav>
  )
}
