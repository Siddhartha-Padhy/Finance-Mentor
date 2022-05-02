import React, { useEffect, useState } from 'react'
import StockTable from '../StockTable'

export default function StocksPage() {
  const [stocks, setStocks] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchStocks() {
    let res = await fetch('https://api.coincap.io/v2/assets')
      .then((data) => data.json())
      .then((result) => result.data)

    setStocks(res)
    setLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      fetchStocks()
    }, 2000)
  }, [])

  return (
    <>
      <table className="table table-dark stock-table">
        <thead>
          <tr className="text-primary">
            <th scope="col">#</th>
            <th scope="col">Mark</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            <th scope="col">History</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <th scope="row">-</th>
              <td className="text-warning">Loading...</td>
              <td className="text-warning">Loading...</td>
              <td className="text-warning">Loading...</td>
              <td className="text-warning">Loading...</td>
            </tr>
          ) : (
            <StockTable stocks={stocks} />
          )}
        </tbody>
      </table>
    </>
  )
}
