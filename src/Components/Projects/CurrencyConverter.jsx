import React, { useState } from 'react'
import InputBox from './InputBox'
import useCurrency from './useCurrencyHook'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setconvertedAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")


  const currencyInfo = useCurrency(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setconvertedAmount(amount);
    console.log('convertedAmount', convertedAmount)
    console.log('amount', amount)

  }

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  }


  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}>
        <InputBox
          label="From"
          currencyOptions={options}
          amount={amount}
          onCurrencyChange={(currency) => setAmount(amount)}
          onAmountChange={(amount) => setAmount(amount)}
          selectCurrency={from}
        />
        <br />
        <br />
        <button onClick={swap} className='btn btn-info'>Swap</button>
        <br />
        <br />
        <InputBox
          label="To"
          currencyOptions={options}
          amount={convertedAmount}
          onCurrencyChange={(currency) => setTo(currency)}
          onAmountChange={(convertedAmount) => setconvertedAmount(convertedAmount)}
          selectCurrency={to}
        />
        <br />
        <button type="submit" className='btn btn-primary'>Convert {from.toUpperCase() + " to " + to.toUpperCase()}</button>
      </form>
    </div>
  )
}

export default CurrencyConverter