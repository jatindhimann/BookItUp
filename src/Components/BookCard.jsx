import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/BookCard'
import { useFavourites } from '../Components/FavouritesContext'
import { toast } from 'react-toastify'

const BookCard = ({ image, name, id, info }) => {
  const { addToFavourites, isFavourite } = useFavourites()
  const isInFavourites = isFavourite(id)

  const handleToggleFavourite = () => {
    addToFavourites({ id, name, image, info })
    if (isInFavourites) {
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
      <div className="img-container">
        <img src={image} alt={name} className="img" />
        <button
          className="btn-fav"
          aria-label={
            isInFavourites ? 'Remove from favourites' : 'Add to favourites'
          }
          onClick={handleToggleFavourite}
        >
          <FaHeart
            color={isInFavourites ? 'var(--primary-500)' : 'var(--grey-400)'}
          />
        </button>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <p>{info}</p>
        <div className="btn-container">
          <Link to={`/book/${id}`} className="btn">
            Details
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

export default BookCard
