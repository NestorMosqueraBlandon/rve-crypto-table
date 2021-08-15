import React from 'react'
import DivisaFormater from './DivisaFormater'

export default function CoinRow({coin, index}) {
    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: '3%'}} />
                <span>{coin.name}</span>
                <span className="symbol">{coin.symbol} </span>
                </td>
            <td><DivisaFormater value = {coin.current_price}></DivisaFormater></td> 
            <td className={coin.price_change_percentage_24h > 0? 'text-success' : 'text-danger'}>{coin.price_change_percentage_24h.toFixed(4)}% </td>
            <td><DivisaFormater value = {coin.total_volume}></DivisaFormater></td>
        </tr>
    )
}
