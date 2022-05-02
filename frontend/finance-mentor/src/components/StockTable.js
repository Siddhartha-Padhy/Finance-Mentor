import React from 'react'

export default function StockTable(props) {
  return (
    <>
      {props.stocks.map((stock) => {
        return (
          <tr key={stock.rank}>
            <th scope="row">{stock.rank}</th>
            <td>{stock.symbol}</td>
            <td>{stock.name}</td>
            <td>
              {stock.changePercent24Hr > 0 ? (
                <i
                  className="fa fa-arrow-up text-success"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-arrow-down text-danger"
                  aria-hidden="true"
                ></i>
              )}
              &nbsp; $
              {Math.round(
                (parseFloat(stock.priceUsd) + Number.EPSILON) * 1000,
              ) / 1000}
            </td>
            <td>
              <img
                src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
                alt="Stock"
              />
            </td>
          </tr>
        )
      })}
    </>
  )
}
