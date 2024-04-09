import React, { useId } from "react"
import './header.css'

export default function Header({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisabled = false,
    currencyDisabled = false
}) {

    const amountInputId = useId();
    return (
        <div className="f-box">
            <div className="to-from">
                <label htmlFor={amountInputId}><b>{label}</b></label>
                <input id={amountInputId}
                    className="inputbox"
                    type="number"
                    placeholder="Amount"
                    disable={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                ></input>
            </div>
            <div>
                <div className="rightbox">
                    <p className="currency"><b>currency type</b></p>
                    <select className="currencyopt" value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisabled}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}