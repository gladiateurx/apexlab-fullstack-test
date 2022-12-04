import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { searchMovies } from '../api/searchMovies'
import { FormGroup, TextField, Box, Grid, InputAdornment, IconButton } from '@mui/material'

const SearchBar = ({ setSearchMovieApiData, setIsLoading, toggleRelated }) => {
  const handleSubmit = async (e) => {
    const searchString = e.target.movieTitle.value
    e.target.movieTitle.value = ''

    e.preventDefault()
    setIsLoading(true)

    const searchMovieApiResponse = await searchMovies(searchString)
    setSearchMovieApiData(searchMovieApiResponse.data.searchMovies)
    localStorage.setItem('lastSearch', searchString)
    toggleRelated
    setIsLoading(false)
  }

  return (
    <>
      <Grid container mt={5} mb={3} spacing={0} alignItems='center' justifyContent='center'>
        <Box component='form' alignItems={'center'} onSubmit={handleSubmit}>
          <FormGroup row>
            <TextField
              required
              label='Search movie'
              name='movieTitle'
              variant='outlined'
              color='secondary'
              type='text'
              sx={{ width: 500, mx: 0.2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end' color='secondary' type='submit'>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </FormGroup>
        </Box>
      </Grid>
    </>
  )
}

export default SearchBar
