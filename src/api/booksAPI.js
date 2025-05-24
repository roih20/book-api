const BASE_URL = 'https://www.googleapis.com/books/v1'

export async function fetchBooks(query, index, filter, orderBy) {
  try {
    const response = await fetch(
      `${BASE_URL}/volumes?q=${query}&startIndex=${index}&filter=${filter}&orderBy=${orderBy}`,
    )

    if (!response.ok) {
      throw new Error('Error fetching books')
    }

    return await response.json()
  } catch (e) {
    console.error(e)
  }
}

export async function getBook(id) {
  try {
    const response = await fetch(`${BASE_URL}/volumes/${id}`)

    if (!response.ok) {
      throw new Error('Error fetching book')
    }

    return await response.json()
  } catch (e) {
    console.error(e)
  }
}
