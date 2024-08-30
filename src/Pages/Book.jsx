import { useLoaderData, Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/BookPage'
import { useFavourites } from '../Components/FavouritesContext' // Adjust path as necessary
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'

const singleBookUrl = 'https://www.googleapis.com/books/v1/volumes/'

const singleBookQuery = (id)=>{
  return {
    queryKey:['cocktail',id],
    queryFn:async()=>{
      const { data } = await axios.get(`${singleBookUrl}${id}`)
      return data;
    }
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(singleBookQuery(id));
    return { id }
  }

const Book = () => {
  const { id } = useLoaderData()
  const { addToFavourites, isFavourite } = useFavourites()

  const {data} = useQuery(singleBookQuery(id));
  if (!data) return <Navigate to="/" />

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
            <button
              className={`btn-favourites ${isBookFavourite ? 'remove' : 'add'}`}
              onClick={handleAddToFavourites}
            >
              {isBookFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
            </button>
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
