import Wrapper from '../assets/wrappers/BookList'
import BookCard from './BookCard'

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <h4 style={{ textAlign: 'center' }}>No Matching Books Found...</h4>
  }

  const formattedBooks = books.map((item) => {
    const image = item.volumeInfo.imageLinks?.smallThumbnail
    const id = item.id
    const title = item.volumeInfo.title
    const author = item.volumeInfo.authors && item.volumeInfo.authors[0]

    return {
      id: id,
      name: title,
      image: image,
      info: author || 'Unknown Author',
    }
  })

  return (
    <Wrapper>
      {formattedBooks.map((item) => {
        return <BookCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default BookList
