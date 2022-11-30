export const popularMovies = async () => {
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
                  overview
                  similar(limit: 5) {
                    id
                    name
                  }
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

    return result
  } catch (error) {
    return error.message
  }
}
