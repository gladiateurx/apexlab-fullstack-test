import React, { useRef } from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import ListMovies from './ListMovies'
import { searchMovies } from '../api/searchMovies'

const SearchBar = ({ placeholder, popMovies }) => {
  const [searchString, setSearchString] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e) => {
    setSearchString(e.target.value)
  }
  const handleClick = async () => {
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
    <div className='search'>
      <div className='search__input'>
        <input type='text' placeholder={placeholder} onChange={handleChange} />
        <button className='search__icon' onClick={handleClick}>
          <SearchIcon />
        </button>
      </div>
      <div className='data__result'></div>
      <div>
        <ListMovies searchResults={searchResults} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default SearchBar
