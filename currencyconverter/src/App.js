import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState('usd')
  const [from, setFrom] = useState('inr')
  const [convertedAmount, setConverteAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConverteAmount(amount)
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConverteAmount(amount * currencyInfo[to])
  }
  return (
    <div className="outer-box">
      <div className='wfull'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>

          <Header
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)} />
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="swapping"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <Header
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisabled
          />
          <button type='submit' ><b>Convert {from.toUpperCase()} to {to.toUpperCase()}</b></button>

        </form>
      </div >
    </div >
  );
}

export default App;

