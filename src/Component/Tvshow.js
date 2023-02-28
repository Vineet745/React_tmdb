import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asynctvfunction } from '../store/Action/Action'
import showcss from "../Component/Tvshow.module.css"

import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'


const Tvshow = () => {
  const dispatch = useDispatch();
  const { tvshow } = useSelector((state) => state.showfetch)

  useEffect(() => {
    dispatch(asynctvfunction())
  }, [])

  const handlePageClick = ({ selected }) => {
    dispatch(asynctvfunction(selected + 1));
    console.log(selected)
  }

  return (
    <>
      <h1 className='text-warning ms-4 mt-3'>Popular Tv Shows</h1>
      <div className='d-flex flex-wrap align-items-center justify-content-start m-3'>
        {tvshow.map((show) => (
          <Link style={{ textDecoration: "none" }}>
            <div className={showcss.maindiv}>
              <div key={show.id} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${show.backdrop_path})` }} className={showcss.imgdiv}>
              </div>
              <div className="textdiv p-2">
                <h6 className='text-center' style={{ color: "white" }}>{show.original_name}</h6>
                <div className="bottom-div">
                  <small className={showcss.small} >{show.first_air_date}</small>
                  <small className={showcss.small2}>{show.vote_average}</small>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <ReactPaginate
        className={showcss.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={15}
        previousLabel="<"
      />
    </>
  )
}

export default Tvshow