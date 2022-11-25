import { useEffect } from 'react'
import { useState } from 'react'
import { popularMovies } from './api/popularMovies'
import './App.css'
import ListMovies from './components/ListMovies'
import SearchBar from './components/SearchBar'

const App = () => {
  const [popMovies, setPopMovies] = useState([])
  const [seatchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    popularMovies().then((json) => {
      setPopMovies(json.data.movies)
      setSearchResults(json.data.movies)
    })
  }, [])
  console.log(popMovies)

  return (
    <div className='app'>
      <SearchBar placeholder='Enter a movie name...' popMovies={popMovies} />
      <ListMovies data={popMovies} />
    </div>
  )
}

export default App
