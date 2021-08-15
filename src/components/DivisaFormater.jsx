import React from 'react'

export default function DivisaFormater(props) {
    const {value} = props;

    const formaterMoney = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    return (
        <div>
            <span>{formaterMoney.format(value)}</span>
        </div>
    )
}
