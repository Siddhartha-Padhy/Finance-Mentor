import React from 'react'
import BankDeposit from '../BankDeposit'

export default function BankPage() {
  return (
    <div className="container">
      <div className="d-flex">
        <BankDeposit
          name="Fixed Deposit"
          desc="A fixed deposit is a financial instrument provided by banks which provides investors a higher rate of interest than a regular savings account, until the given maturity date."
        />
        <BankDeposit
          name="Recurring Deposit"
          desc="It is an investment tool which allows people to make regular deposits and earn decent returns on the investment."
        />
      </div>

      {/* Second Column */}

      <div className="d-flex">
        <BankDeposit
          name="Lump Sum"
          desc="If you invest the entire amount available with you in a mutual fund scheme, it is called the lump-sum mutual fund investment."
        />
        <BankDeposit
          name="SIP"
          desc="SIP facility allows an investor to invest a fixed amount of money at pre-defined intervals in the selected mutual fund scheme."
        />
      </div>
    </div>
  )
}
