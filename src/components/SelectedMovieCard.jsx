import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Grid, Button } from '@mui/material'
import { textChunker } from '../helpers/textChunker'

const SelectedMovieCard = ({ movie, toggleRelated }) => {
  const isItTooLong = movie.name.length > 26

  return (
    <Card key={movie.id} sx={{ fontSize: 14, maxHeight: 500 }} color='text.secondary' elevation={5}>
      <CardContent sx={{ padding: 3 }}>
        <Typography gutterBottom variant='h5' color='primary' component='div'>
          {isItTooLong ? textChunker(movie.name, 40) : movie.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Rating: {movie.score}
        </Typography>
        <Typography gutterBottom color='text.secondary'>
          {textChunker(movie.overview, 70)}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={0} mr={2} justifyContent='end'>
          <Grid item>
            <Button onClick={toggleRelated} sx={{ fontSize: '0.8rem' }} variant='contained'>
              BACK
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default SelectedMovieCard
