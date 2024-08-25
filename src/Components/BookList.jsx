import Wrapper from '../assets/wrappers/BookList'
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (!books) {
    return <h4 style={{ textAlign: 'center' }}>No Matching Books Found...</h4>
  }

  const formattedBooks = books.map((item) => {
    const image = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    const id = item.id
    const title = item.volumeInfo.title
    const author = item.volumeInfo.authors

    return {
      id: id,
      name: title,
      image: image,
      info: author[0],
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
