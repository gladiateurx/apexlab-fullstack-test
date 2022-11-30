import ListMovies from './components/ListMovies'
import SearchBar from './components/SearchBar'
import { useState } from 'react'
import SimilarMovies from './components/SimilarMovies'

const App = () => {
  const [searchMovieApiData, setSearchMovieApiData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showRelated, setShowRelated] = useState(false)

  const toggleRelated = () => {
    setShowRelated(!showRelated)
  }

  return (
    <>
      <SearchBar
        setSearchMovieApiData={setSearchMovieApiData}
        setIsLoading={setIsLoading}
        toggleRelated={toggleRelated}
      />
      {showRelated ? (
        <SimilarMovies searchMovieApiData={searchMovieApiData} isLoading={isLoading} />
      ) : (
        <ListMovies
          searchMovieApiData={searchMovieApiData}
          isLoading={isLoading}
          toggleRelated={toggleRelated}
        />
      )}
    </>
  )
}

export default App
