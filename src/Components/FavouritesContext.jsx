import React, { createContext, useState, useContext } from 'react'

const FavouritesContext = createContext()

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  const addToFavourites = (book) => {
    setFavourites((prevFavourites) => {
      if (prevFavourites.find((item) => item.id === book.id)) {
        return prevFavourites.filter((item) => item.id !== book.id)
      }
      return [...prevFavourites, book]
    })
  }

  const isFavourite = (id) => {
    return favourites.some((book) => book.id === id)
  }

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  )
}

export const useFavourites = () => {
  return useContext(FavouritesContext)
}
