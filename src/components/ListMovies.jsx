import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import React from 'react'

const ListMovies = ({ searchResults, isLoading }) => {
  if (isLoading) return <CircularProgress />

  return (
    <>
      {searchResults &&
        searchResults.map((movie) => {
          return (
            <div key={movie.id}>
              <p>{movie.name}</p>
              <p>{movie.score}</p>
            </div>
          )
        })}
    </>
  )
}

export default ListMovies
