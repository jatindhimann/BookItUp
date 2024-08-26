import React from 'react'
import BookCard from '../Components/BookCard'
import { useFavourites } from '../Components/FavouritesContext'
import Wrapper from '../assets/wrappers/Favourites'

const Favourites = () => {
  const { favourites = [] } = useFavourites()

  if (favourites.length === 0) {
    return <h3>No Favourites Added Yet......</h3>
  }

  return (
    <Wrapper>
      <h1>Your Favourites</h1>
      <div className="favourites-container">
        {favourites.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            image={book.image}
            name={book.name}
            info={book.info}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default Favourites
