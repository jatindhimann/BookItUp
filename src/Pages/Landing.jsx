import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import BookList from '../Components/BookList'

export const loader = async () => {
  const searchTerm = 'react'
  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyB87PBb62GE97KH3p8rPZyGJHazgnIWQyg&maxResults=40`
  )

  return { books: response.data.items, searchTerm }
}
const Landing = () => {
  const {books,searchTerm} = useLoaderData();
  console.log(books);
  return <>
  <BookList books  = {books}/>
  </>
}
export default Landing
