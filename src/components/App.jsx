import ListMovies from './ListMovies'
import SearchBar from './SearchBar'
import { useState } from 'react'
import SimilarMovies from './SimilarMovies'

const App = () => {
  const [searchMovieApiData, setSearchMovieApiData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [showRelated, setShowRelated] = useState(false)

  const toggleRelated = () => {
    setShowRelated(!showRelated)
  }

  return (
    <>
      <SearchBar setSearchMovieApiData={setSearchMovieApiData} setIsLoading={setIsLoading} />
      {showRelated ? (
        <SimilarMovies
          searchMovieApiData={searchMovieApiData}
          toggleRelated={toggleRelated}
          isLoading={isLoading}
        />
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
