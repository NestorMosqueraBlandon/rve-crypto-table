import React from 'react'
import CoinRow from './CoinRow'

const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume']

const TableCoins = ({ coins, search }) => {    

    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    {
                        titles.map(title => (
                            <th key={title}>{title}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {coins.filter(((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())))
                .map((coin, index) => (
                    <CoinRow coin={coin} key={index} index={index} />
                ))}
            </tbody>
        </table>
    )
}

export default TableCoins;
