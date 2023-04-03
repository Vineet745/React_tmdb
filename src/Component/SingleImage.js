import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Singlemovie from "../Component/Singlemovie.module.css"

export default function SingleImage() {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const fetchSingleMovie = async () => {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8baba8ab6b8bbe247645bcae7df63d0d&language=en-US`)
      console.log(data)
      // console.log(movie)
      setMovie(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchSingleMovie()

  }, [])

  return (
    <>
      <div className={Singlemovie.maindiv}>
        <div>
          <div className={Singlemovie.imagediv}>
            <img src={`https://image.tmdb.org/t/p/w500${movie ? movie.poster_path : "Aajayegi bhai rukja"}`} alt="" />

          </div>
          <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Release-Date :- <span style={{ color: "white" }}>{movie.release_date}</span> </h5>
          <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Vote-average :- <span style={{ color: "white" }}>{movie.vote_average}</span> </h5>
        </div>
        <div className={Singlemovie.rightdiv}>
          <div className={Singlemovie.title}>
            <p className=' fs-1 fw-light' style={{ color: "white" }}>{movie.original_title}</p>
          </div>
          <div style={{ margin: "10px 0px" }} className={Singlemovie.overview}>
            <h5 style={{ color: "lightgreen" }}>Overview - </h5>
            <p className='mb-0 fs-5' style={{ color: "white" }}>{movie.overview}</p>
          </div>
          <div >
            <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Tagline - <span style={{ color: "white" }}>{movie.tagline ? movie.tagline : "Default"}</span> </h5>
          </div>
          <div >
            <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Status - <span style={{ color: "white" }}>{movie.status}</span> </h5>
            <h5 className='fs-5 my-4' style={{ color: "lightgreen" }}>Language - <span style={{ color: "white" }}>{movie.original_language}</span> </h5>
          </div>
        </div>

      </div>
    </>

  )
}
