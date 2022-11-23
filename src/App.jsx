import './App.css'
import { CircularProgress } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'

const x = async () => {
  const response = await fetch('https://tmdb.sandbox.zoosh.ie/dev/grphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `{
              movies: popularMovies {
                name
                score
                genres {
                  name
                }
              }
            }`,
    }),
  })
  const data = await response.json()
  return data.data.movies
}

const getPopularMovies = async () => {
  const popularMovies = await x()
  console.log(popularMovies)
  return popularMovies
}

const App = () => {
  let [movieArr, setMovieArr] = useState([])

  useEffect(() => {
    getPopularMovies().then((movies) => setMovieArr(movies))
  }, [])

  if (!movieArr) return <CircularProgress />

  return (
    <div className='app'>
      {movieArr.map((movie) => (
        <ul>
          Title: {movie.name}
          <li>Score: {movie.score}</li>
          <ul>
            Genres:
            {movie.genres.map((genre) => (
              <li>{genre.name}</li>
            ))}
          </ul>
        </ul>
      ))}
    </div>
  )
}

export default App
