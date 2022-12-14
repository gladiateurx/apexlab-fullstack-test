export const getWikiSearchResults = async (searchTerm) => {
  const title = `${searchTerm} (film)`
  try {
    const movieByTitleURL = `https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles=${title}`

    const response = await fetch(movieByTitleURL)

    if (!response.ok) {
      throw new Error(`Error! Status: ${response.status}`)
    }

    const responseJSON = await response.json()
    const pages = Object.values(responseJSON.query.pages)
    const result = pages[pages.length - 1]

    if (result.missing != null) {
      return {}
    }

    return {
      overview: result.extract,
      url: `https://en.wikipedia.org/wiki/${title}`,
    }
  } catch (error) {
    return error.message
  }
}
