import React, { useState } from 'react'
import CardStateLifting from './CardStateLifting';

const StateLifting = () => {
  // State Lifting Mai Child Se Parent Ko Data Transfer Karte Hain
  // Parent Component Mai Hi State Create Krte Hain Manage Krte Hain Change Karte Hain Aur Sabhi Child Mai State Ko Sync Karte Hain
  const [name, setName] = useState('');
  return (
    <div>
      <h3>State Lifting</h3>
        <CardStateLifting title="Card 1" name={name} setName={setName} />
        <CardStateLifting title="Card 2" name={name} setName={setName} />
        {/* name ki value child se set ho rhi hai */}
        {/* Name ki value saare child mai ek jesi milegi chahe koi bhi child use change kre */}
        {/* <p>Parent Name Value =  {name}</p> */}
    </div>
  )
}

export default StateLifting