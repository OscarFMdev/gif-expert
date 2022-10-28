import { useState } from 'react';
import { useEffect } from 'react';
import getGifs from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []);
  
  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(image => <li>{image.title}</li>)}
      </ol>
    </>
  )
}
