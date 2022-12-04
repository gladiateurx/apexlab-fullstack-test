import React from 'react'
import { Grid, Divider } from '@mui/material'
import LoadingProgress from './LoadingProgress'
import SimilarMovieCard from './SimilarMovieCard'
import SelectedMovieCard from './SelectedMovieCard'

const SimilarMovies = ({ searchMovieApiData, toggleRelated, isLoading }) => {
  const movieId = localStorage.getItem('movieId') || ''
  const [movie] = searchMovieApiData.filter((movie) => movie.id === movieId)
  const similarMovies = movie ? movie.similar : null

  if (!similarMovies) {
    toggleRelated()
  }

  if (isLoading) return <LoadingProgress />

  return (
    <div key={movie.id}>
      <Grid container mb={5} justifyContent={'center'} spacing={5}>
        <Grid item xs={3}>
          <SelectedMovieCard movie={movie} toggleRelated={toggleRelated} />
        </Grid>
      </Grid>
      <Divider variant='middle' sx={{ mb: 4 }}></Divider>
      <Grid container mb={5} justifyContent={'center'} spacing={5}>
        {similarMovies.map((similarMovie) => {
          return (
            <Grid item xs={3} key={similarMovie.id}>
              <SimilarMovieCard similarMovie={similarMovie} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default SimilarMovies
