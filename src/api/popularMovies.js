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
                }
              }`,
      }),
    })

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`)
    }

    const result = await response.json()

    console.log('result is: ', JSON.stringify(result, null, 4))
    return result
  } catch (error) {
    return error.message
  }
}
