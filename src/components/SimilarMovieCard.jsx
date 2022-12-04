import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const SimilarMovieCard = ({ similarMovie }) => {
  return (
    <>
      <Card sx={{ backgroundColor: '#512DA8' }} elevation={3}>
        <Typography
          variant='h6'
          color={'white'}
          height={40}
          margin={0}
          paddingTop={1}
          textAlign={'center'}
        >
          {similarMovie.name}
        </Typography>
      </Card>
    </>
  )
}

export default SimilarMovieCard
