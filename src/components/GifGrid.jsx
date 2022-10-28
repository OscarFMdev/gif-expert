import React from 'react'

export const GifGrid = ({ category }) => {
  
  const gifs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <h3>{category}</h3>
      {
        gifs.map( gif => <p>{ gif }</p>)
      }
    </div>
  )
}
