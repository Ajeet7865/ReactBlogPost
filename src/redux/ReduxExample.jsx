import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';
import UsersList from '../features/users/userList';

const ReduxExample = () => {
    const [Amount, setAmount] = useState(0)
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();

    const DecrementCount = () => {
        if (count != 0) {
            dispatch(decrement());
        }
    }
    const ResetCount = () => {
        dispatch(reset());
    }
    const IncrementAmountCount = () => {
        dispatch(incrementByAmount(Amount));
    }



    return (
        <div className='container'>
            <div className="row">
                <div className="col-sm-2">
                    <button className='btn btn-lg btn-primary' onClick={() => dispatch(increment())}>+</button>
                    <button className='btn btn-lg btn-info' onClick={DecrementCount}>-</button>
                </div>
                <div className="col-sm-3">
                    <h1>Count : {count} </h1>
                </div>
                <div className="col-sm-2">

                    <button className='btn btn-lg btn-danger' onClick={ResetCount}>Reset</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3">
                    <input type="number" value={Amount} onChange={(e) => setAmount(e.target.value)} />
                    <br />
                    <button className='btn btn-succes btn-lg' onClick={IncrementAmountCount}>Increment By Amount</button>
                </div>
            </div>

        </div>
    )
}

export default ReduxExample