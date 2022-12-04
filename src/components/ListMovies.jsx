import { Grid } from '@mui/material'
import React from 'react'
import MovieCard from './MovieCard'
import LoadingProgress from './LoadingProgress'

const ListMovies = ({ searchMovieApiData, isLoading, toggleRelated }) => {
  if (isLoading) return <LoadingProgress />

  return (
    <>
      <Grid container mb={5} justifyContent={'center'} spacing={5}>
        {searchMovieApiData &&
          searchMovieApiData.map((movie) => {
            return (
              <Grid item xs={3} key={movie.id}>
                <MovieCard movie={movie} toggleRelated={toggleRelated} />
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default ListMovies
