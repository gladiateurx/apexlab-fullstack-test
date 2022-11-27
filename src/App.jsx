import { useEffect } from 'react'
import { useState } from 'react'
import { popularMovies } from './api/popularMovies'
import { getWikiSearchResults } from './api/wikiApi'
import './App.css'
import ListMovies from './components/ListMovies'
import SearchBar from './components/SearchBar'

const App = () => {
  const [popMovies, setPopMovies] = useState([])

  useEffect(() => {
    popularMovies().then((json) => {
      setPopMovies(json.data.movies)
    })
  }, [])

  return (
    <>
      <SearchBar placeholder='Enter a movie name...' popMovies={popMovies} />
      <ListMovies data={popMovies} />
    </>
  )
}

export default App
