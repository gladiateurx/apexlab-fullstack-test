import React from 'react'
import { Grid, CircularProgress } from '@mui/material'

const LoadingProgress = () => {
  return (
    <Grid container spacing={0} alignItems='center' justifyContent='center'>
      <CircularProgress color='secondary' sx={{ my: 25 }} />
    </Grid>
  )
}

export default LoadingProgress
