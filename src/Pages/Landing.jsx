import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import BookList from '../Components/BookList'
import SearchForm from '../Components/SearchForm'

export const loader = async ({request}) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || 'React'
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${import.meta.env.VITE_API_KEY}&maxResults=40`
  )

  return { books: response.data.items, searchTerm }
}
const Landing = () => {
  const {books,searchTerm} = useLoaderData();
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <BookList books={books} />
    </>
  )
}
export default Landing
