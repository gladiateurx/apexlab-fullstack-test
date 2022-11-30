import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Box, Collapse, IconButton, styled, Grid, Button, Divider } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { getWikiSearchResults } from '../api/wikiApi'
import { useEffect } from 'react'
import { textChunker } from '../helpers/textChunker'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const MovieCard = ({ movie, toggleRelated }) => {
  const [expanded, setExpanded] = useState(false)
  const [wikiResult, setWikiResult] = useState({})
  const isItTooLong = movie.name.length > 26

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    getWikiSearchResults(movie.name).then((wikiResult) => {
      setWikiResult(wikiResult)
    })
  }, [])

  return (
    <Card key={movie.id} sx={{ fontSize: 14, maxHeight: 500 }} color='text.secondary' elevation={3}>
      <CardContent sx={{ height: 125, padding: 3, mb: 3 }}>
        {isItTooLong ? (
          <Typography
            gutterBottom
            sx={{ cursor: 'pointer' }}
            variant='h5'
            color='primary'
            component='div'
            onClick={handleExpandClick}
          >
            {textChunker(movie.name, 40)}
          </Typography>
        ) : (
          <Typography
            gutterBottom
            sx={{ cursor: 'pointer' }}
            variant='h5'
            color='primary'
            component='div'
            onClick={handleExpandClick}
          >
            {movie.name}
          </Typography>
        )}
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Rating: {movie.score}
        </Typography>
        <Typography variant='h6'>Category:</Typography>
        {movie.genres.map((genre) => {
          return (
            <Box display='inline-list-item' key={genre.id}>
              <Typography variant='subtitle1' mr={1}>
                {genre.name}
              </Typography>
            </Box>
          )
        })}
      </CardContent>
      <CardActions>
        <Typography
          expand={expanded.toString()}
          onClick={handleExpandClick}
          gutterBottom
          variant='h5'
          sx={{ cursor: 'pointer' }}
          ml={2}
          mt={2}
        >
          Overview
        </Typography>
        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Divider variant='middle'></Divider>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='string' color='text-secondary'>
            {wikiResult.overview != null
              ? textChunker(wikiResult.overview, 320)
              : movie.overview
              ? textChunker(movie.overview, 320)
              : 'Overview is not available!'}
          </Typography>
          <Grid container spacing={0} mt={3}>
            {movie.imdb ? (
              <Grid item mr={2}>
                <Button
                  sx={{ fontSize: '0.7rem' }}
                  variant='outlined'
                  target='_blank'
                  rel='noopener'
                  href={movie.imdb}
                >
                  IMDb
                </Button>
              </Grid>
            ) : (
              <Grid item mr={2}>
                <Button
                  sx={{ fontSize: '0.7rem' }}
                  variant='outlined'
                  target='_blank'
                  rel='noopener'
                  href='https://www.imdb.com/'
                >
                  IMDb
                </Button>
              </Grid>
            )}
            {wikiResult.url != null ? (
              <Grid item mr={2}>
                <Button
                  sx={{ fontSize: '0.7rem' }}
                  variant='outlined'
                  target='_blank'
                  rel='noopener'
                  href={wikiResult.url}
                >
                  Wikipedia
                </Button>
              </Grid>
            ) : null}
            <Grid item>
              <Button onClick={toggleRelated} sx={{ fontSize: '0.7rem' }} variant='outlined'>
                Related
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MovieCard
