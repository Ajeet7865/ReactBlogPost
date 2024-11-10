import React, { useId } from 'react'

const InputBox = (
  {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = ["usd", "inr", "euro"],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
  }
) => {

  const txtAmountID = useId();

  return (
    <div>
      <div className="row">
        <div className="col-sm-4">
          <label htmlFor={txtAmountID}>{label}</label>
          <br />
          <input
            className='form-control'
            type="number"
            placeholder='Amount'
            id={txtAmountID}
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
        </div>
        <div className="col-sm-4">
          <span></span>
          <label>Currency Type</label>
          <br />
          <select className="form-control" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisabled}>
            {
              currencyOptions.map((item) => (
                <option value={item} key={item}>{item}</option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputBox