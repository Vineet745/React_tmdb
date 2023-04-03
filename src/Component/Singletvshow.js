import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Singlemovie from "../Component/Singlemovie.module.css"

const Singletvshow = () => {
    const {id} = useParams();
  const [show, setshow] = useState({})

  const fetchsingleshow = async ()=>{
    try {
        const {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=bab29db4b804e2ebdc1ecf5535d2df99&language=en-US`)

        console.log(data)
        setshow(data)

    } catch (error) {
        
    }
  }

  useEffect(() => {
    fetchsingleshow()
  }, [])
  

  return (
    <>
    <div className={Singlemovie.maindiv}>
        <div>
          <div key={show.id} className={Singlemovie.imagediv}>
            <img src={`https://image.tmdb.org/t/p/w500${show ? show.backdrop_path : "Aajayegi bhai rukja"}`} alt="" />

          </div>
          <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Release-Date :- <span style={{ color: "white" }}>{show.first_air_date}</span> </h5>
          <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Vote-average :- <span style={{ color: "white" }}>{show.vote_average}</span> </h5>
        </div>
        <div className={Singlemovie.rightdiv}>
          <div className={Singlemovie.title}>
            <p className=' fs-1 fw-light' style={{ color: "white" }}>{show.name}</p>
          </div>
          <div style={{ margin: "10px 0px" }} className={Singlemovie.overview}>
            <h5 style={{ color: "lightgreen" }}>Overview - </h5>
            <p className='mb-0 fs-5' style={{ color: "white" }}>{show.overview}</p>
          </div>
          <div >
            <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Tagline - <span style={{ color: "white" }}>{show.tagline ? show.tagline : "Default"}</span> </h5>
          </div>
          <div >
            <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Status - <span style={{ color: "white" }}>{show.status}</span> </h5>
            <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Language - <span style={{ color: "white" }}>{show.original_language}</span> </h5>
          </div>
        </div>

      </div></>
  )
}

export default Singletvshow