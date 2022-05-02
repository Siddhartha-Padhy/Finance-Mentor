import React from 'react'

export default function BankDeposit(props) {
  return (
    <div
      className="card w-50 bank-card"
      style={{ borderLeft: '5px solid blue' }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.desc}</p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  )
}
