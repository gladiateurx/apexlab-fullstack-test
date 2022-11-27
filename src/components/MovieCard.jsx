import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Collapse, IconButton, styled } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState } from 'react'
import { getWikiSearchResults } from '../api/wikiApi'
import { useEffect } from 'react'

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

const MovieCard = ({ movie }) => {
  const [expanded, setExpanded] = useState(false)
  const [wikiResult, setWikiResult] = useState({})

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    getWikiSearchResults(movie.name).then((wikiResult) => {
      setWikiResult(wikiResult)
    })
  }, [])

  return (
    <Card key={movie.id} sx={{ fontSize: 14, my: 2, width: 800 }} color='text.secondary'>
      <CardContent>
        <Typography
          sx={{ cursor: 'pointer' }}
          variant='h4'
          component='div'
          onClick={handleExpandClick}
        >
          {movie.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Rating: {movie.score}
        </Typography>
        <Typography variant='h5'>Category:</Typography>
        {movie.genres.map((genre) => {
          return (
            <div key={genre.id}>
              <Typography variant='body2'>{genre.name}</Typography>
            </div>
          )
        })}
      </CardContent>
      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='h5'>Overview:</Typography>
          <Typography paragraph>
            {wikiResult.overview != null
              ? wikiResult.overview
              : movie.overview
              ? movie.overview
              : 'Overview is not available!'}
          </Typography>
          {wikiResult.url != null ? (
            <Link target='_blank' href={wikiResult.url}>
              Wikipedia Page
            </Link>
          ) : (
            "Wikipedia page can't be found"
          )}
          {movie.imdb ? (
            <Link target='_blank' href={movie.imdb}>
              IMDb
            </Link>
          ) : (
            <Link target='_blank' href='https://www.imdb.com/'>
              IMDb
            </Link>
          )}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default MovieCard
