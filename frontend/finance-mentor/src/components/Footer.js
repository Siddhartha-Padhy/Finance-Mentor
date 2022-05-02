import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright:&nbsp;
        <a className="text-primary" style={{ textDecoration: 'none' }} href="/">
          Mentor.com
        </a>
      </div>
    </footer>
  )
}
