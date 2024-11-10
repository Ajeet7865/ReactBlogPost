import React, { useState } from 'react'

const EventHandling = () => {

  const [myColor, setColor] = useState("#fff");

  function SimpleAlert() {
    alert("Click Event Working")
  }
  function InputChange(e) {
    console.log(e.target.value)
  }

  function OnSubmitForm(e) {
    e.preventDefault();
    alert('Form Submitted Successfully');
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setColor(color);
  };


  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <button className="btn btn-success" onClick={SimpleAlert}>Click Event</button>
          <br />
          <br />
          <button className="btn btn-success" onClick={() => { alert('Direct Alert Clicked') }}>Click Event Direct</button>
          <br /><br />
          <input type="text" onChange={InputChange} />
          <br /><br />
          <h3>Form Submit Event</h3>
          <form onSubmit={OnSubmitForm}>
            <input type="text" id="txtName" />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="col-sm-6">

          <h3>Color Change Application</h3>
          <button onClick={getRandomColor} className='btn btn-info'>Click To Change</button>
          <br />
          <div style={{ width: "300px", marginTop: "10px", height: "200px", border: "1px solid black", backgroundColor: myColor }}></div>
        </div>
      </div>

    </>
  )
}

export default EventHandling