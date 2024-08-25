import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/BookPage'

const singleBookUrl = 'https://www.googleapis.com/books/v1/volumes/'
export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleBookUrl}${id}`)
  return { id, data }
}

const Book = () => {
  const { id, data } = useLoaderData()

  const image = data.volumeInfo.imageLinks?.smallThumbnail
  const title = data.volumeInfo.title
  const publisher = data.volumeInfo.publisher
  const publishedDate = data.volumeInfo.publishedDate
  const description = data.volumeInfo.description
  const preview = data.volumeInfo.previewLink
  const amount = data.saleInfo.listPrice && data.saleInfo.listPrice.amount;

  return (
    <>
      <Link
        to="/"
        className="btn"
        style={{ marginBottom: '2rem', display: 'inline-block' }}
      >
        Back to Home
      </Link>
      <Wrapper>
        <div className="book-container">
          <div>
            <img src={image} alt={title} className="book-image" />
            {preview && (
              <a
                href={preview}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-more"
              >
                More
              </a>
            )}
          </div>
          <div className="book-info">
            <h2>{title}</h2>
            <h4>Published By: {publisher}</h4>
            <h4>Published On: {publishedDate}</h4>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Book
