import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/BookPage'
import { useFavourites } from '../Components/FavouritesContext' // Adjust path as necessary
import { toast } from 'react-toastify'

const singleBookUrl = 'https://www.googleapis.com/books/v1/volumes/'

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleBookUrl}${id}`)
  return { id, data }
}

const Book = () => {
  const { id, data } = useLoaderData()
  const { addToFavourites, isFavourite } = useFavourites()

  const image = data.volumeInfo.imageLinks?.smallThumbnail
  const title = data.volumeInfo.title
  const publisher = data.volumeInfo.publisher
  const publishedDate = data.volumeInfo.publishedDate
  const description = data.volumeInfo.description
  const preview = data.volumeInfo.previewLink
  const amount = data.saleInfo.listPrice?.amount

  const isBookFavourite = isFavourite(id)

  const handleAddToFavourites = () => {
    const book = {
      id,
      name: title,
      image: image,
      info: data.volumeInfo.authors[0] || 'Unknown Author',
    }
    addToFavourites(book)
    if (isBookFavourite) {
      toast.error('Removed from Favourites!', {
        position: 'top-center',
      })
    } else {
      toast.success('Added to Favourites!', {
        position: 'top-center',
      })
    }
  }

  return (
    <Wrapper>
      <div className="back-container">
        <Link to="/" className="btn-back">
          Back to Home
        </Link>
      </div>
      <div className="book-container">
        <div className="image-container">
          <img src={image} alt={title} className="book-image" />
        </div>
        <div className="book-info">
          <h2>{title}</h2>
          <h4>Published By: {publisher}</h4>
          <h4>Published On: {publishedDate}</h4>
          {amount && <h4>Price: ${amount}</h4>}
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
          <div className="button-group">
            <a
              href="#"
              className={`btn-favourites ${isBookFavourite ? 'remove' : 'add'}`}
              onClick={(e) => {
                e.preventDefault()
                handleAddToFavourites()
              }}
            >
              {isBookFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
            </a>
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
        </div>
      </div>
    </Wrapper>
  )
}

export default Book
