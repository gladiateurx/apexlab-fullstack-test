import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import {
  Box,
  Collapse,
  IconButton,
  styled,
  Grid,
  Button,
  Divider,
  CircularProgress,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { getWikiSearchResults } from '../api/wikiApi'
import { useEffect } from 'react'
import { textChunker } from '../helpers/textChunker'

const SimilarMovies = ({ searchMovieApiData, isLoading }) => {
  console.log(searchMovieApiData)
  if (searchMovieApiData && searchMovieApiData.length === 0) return null

  if (isLoading) {
    return (
      <Grid container spacing={0} alignItems='center' justifyContent='center'>
        <CircularProgress color='secondary' sx={{ my: 25 }} />
      </Grid>
    )
  }

  return (
    <>
      {searchMovieApiData.map((movie) =>
        movie.similar.map((title) => {
          return (
            <div key={title.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    sx={{ cursor: 'pointer' }}
                    variant='h5'
                    color='primary'
                    component='div'
                  >
                    {textChunker(title.name, 40)}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          )
        }),
      )}
    </>
  )
}

export default SimilarMovies
