import './App.css'
import { Button, CircularProgress } from '@mui/material'
import { useState } from 'react'

const App = () => {
  const [movieArr, setMovieArr] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const getMovies = async () => {
    setIsLoading(true)

    try {
      const response = await fetch('https://tmdb.sandbox.zoosh.ie/dev/grphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `{
                  movies: popularMovies {
                    id
                    name
                    score
                    genres {
                      id
                      name
                    }
                  }
                }`,
        }),
      })

      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`)
      }

      const result = await response.json()

      console.log('result is: ', JSON.stringify(result, null, 4))
      setMovieArr(result.data.movies)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  console.log(movieArr)
  return (
    <div className='app'>
      {error && <h2>{error}</h2>}

      {isLoading ? <CircularProgress /> : <button onClick={getMovies}>Fetch movies</button>}

      {movieArr.map((movie) => {
        return (
          <div key={movie.id}>
            <Button
              href={`https://en.wikipedia.org/wiki/${movie.name}`}
              target='_blank'
              rel='noopener'
              underline='none'
              variant='outlined'
              size='large'
              color='error'
            >
              {movie.name}
            </Button>
            <p>Rating: {movie.score}</p>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default App
