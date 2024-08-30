import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import BookList from '../Components/BookList'
import SearchForm from '../Components/SearchForm'

import { useQuery } from '@tanstack/react-query'

const searchBooksQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${
          import.meta.env.VITE_API_KEY
        }&maxResults=40`
      )

      return response.data.items;
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchTerm = url.searchParams.get('search') || 'React';

    await queryClient.ensureQueryData(searchBooksQuery(searchTerm));

    return { searchTerm };
  }
const Landing = () => {
  const { searchTerm } = useLoaderData()

  const { data: books } = useQuery(searchBooksQuery(searchTerm))
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <BookList books={books} />
    </>
  )
}
export default Landing
