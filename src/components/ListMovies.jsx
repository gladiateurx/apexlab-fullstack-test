import CircularProgress from '@mui/material/CircularProgress'

import React from 'react'
import MovieCard from './MovieCard'

const ListMovies = ({ searchResults, isLoading }) => {
  if (isLoading) return <CircularProgress sx={{ my: 25 }} />

  return (
    <>
      {searchResults &&
        searchResults.map((movie) => {
          return (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          )
        })}
    </>
  )
}

export default ListMovies
