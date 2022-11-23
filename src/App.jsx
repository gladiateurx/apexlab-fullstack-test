import './App.css'

const fetchMovies = async () => {
  const data = await fetch('https://tmdb.sandbox.zoosh.ie/dev/grphql', {
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
  const popularMovies = await data.json()
  return popularMovies
}

console.log(fetchMovies())

const App = () => {
  return (
    <div className='app'>
      <h1>Hello, Vite project!</h1>
      <button>Change</button>
    </div>
  )
}

export default App
