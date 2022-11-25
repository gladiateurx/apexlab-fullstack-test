export const searchMovies = async (searchString) => {
  try {
    const response = await fetch('https://tmdb.sandbox.zoosh.ie/dev/grphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `{
                searchMovies(query: "${searchString}") {
                  id
                  name
                  score
                  overview
                  similar(limit: 5) {
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
    return result
  } catch (error) {
    return error.message
  }
}
