import React from 'react'
import { useParams } from 'react-router-dom'

// UseParams Hook ka use URL se ID yaa value nikalne ke liye krte hain
const UseParams = () => {
    
    // Params Ki Setting Routing Mai Krte Hain
    const {id} = useParams();
    
    // Or 
    const useridObj = useParams();

  return (
    <>
      Parameter : {id}
      <br />
      With Object : {useridObj.id}
    </>
  )
}

export default UseParams