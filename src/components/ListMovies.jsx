import { Grid, Typography } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

import React from 'react'
import MovieCard from './MovieCard'
import Header from './Header'
import SimilarMovies from './SimilarMovies'

const ListMovies = ({ searchMovieApiData, isLoading, toggleRelated }) => {
  if (isLoading) {
    return (
      <Grid container spacing={0} alignItems='center' justifyContent='center'>
        <CircularProgress color='secondary' sx={{ my: 25 }} />
      </Grid>
    )
  }

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
