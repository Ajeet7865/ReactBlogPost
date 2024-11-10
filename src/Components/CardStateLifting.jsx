import React from 'react'


const CardStateLifting = (props) => {
  return (
    <>
       <div className="row">
        <div className="col-sm-4">
            <input type="text" className="form-control" onChange={(e) => props.setName(e.target.value)} />
            <p>{props.title} Value : {props.name}</p>
        </div>
       </div>
    </>
    
  )
}

export default CardStateLifting