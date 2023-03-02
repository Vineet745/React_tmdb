import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadimageAction } from '../store/Action/Action'
import {Link} from "react-router-dom"
import moviecss from "../Component/Movie.module.css"
import ReactPaginate from 'react-paginate'
import loader from "../assets/loader.gif"

const Movie = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.moviefetch)

  console.log(movies)

  useEffect(() => {
    dispatch(asyncloadimageAction());
  }, [])

const handlePageClick = ({selected})=>{
  dispatch(asyncloadimageAction(selected + 1));
  console.log(selected)
}


  return (
    <>
      <h1 className='text-warning ms-4 mt-3'>Popular Movies</h1>
      
      <div className='d-flex flex-wrap align-items-center justify-content-start m-3'>
      <div className="childcontainer">
     </div>
        {movies.map((movie) => (
          <Link to={`/single-m/${movie.id}`} style={{textDecoration:"none"}}>
          <div  className={moviecss.maindiv}>
            <div key={movie.id} style={{ backgroundImage:`url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`}} className={moviecss.imgdiv}>
            </div>
            
            <div  className="textdiv p-2">
              <h6 className='text-center' style={{color:"white"}}>{movie.title}</h6>
              <div className="bottom-div">
              <small className={moviecss.small} >{movie.release_date}</small>
              <small className={moviecss.small2}>{movie.vote_average}</small>
              </div>
            </div>
          </div>
          </Link>
          
        ))}
      </div>
      
      <ReactPaginate 
                className={moviecss.pagination}
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={25}
                previousLabel="<"
            />
      
      
    </>
  )
}

export default Movie