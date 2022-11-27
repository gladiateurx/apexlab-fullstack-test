import React from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import ListMovies from './ListMovies'
import { searchMovies } from '../api/searchMovies'

const SearchBar = ({ placeholder, popMovies }) => {
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    const searchString = e.target.movieTitle.value
    e.preventDefault()
    setIsLoading(true)
    if (searchString === '') {
      setSearchResults(popMovies)
      setIsLoading(false)
    } else {
      const response = await searchMovies(searchString)
      setSearchResults(response.data.searchMovies)
    }
    setIsLoading(false)
  }
  console.log(searchResults)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='search'>
          <div className='search__input'>
            <input name='movieTitle' type='text' placeholder={placeholder} />
            <button type='submit' className='search__icon'>
              <SearchIcon />
            </button>
          </div>
        </div>
      </form>
      <ListMovies searchResults={searchResults} isLoading={isLoading} />
    </>
  )
}

export default SearchBar
