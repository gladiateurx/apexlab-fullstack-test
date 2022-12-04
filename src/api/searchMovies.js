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
                  genres {
                    id
                    name
                  }
                  socialMedia {
                    imdb
                  }
                  similar {
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
