import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Details = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params,location)
  return (
    <>
    <div className='border border-dark' style={{width:"80vw", height:"30vh"}}>
      <h1 style={{color:"white"}}>Contact Change</h1>
    </div>
    </>
  )
}

export default Details